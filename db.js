import "dotenv/config";

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error(
    "Supabase sozlamalari topilmadi. NEXT_PUBLIC_SUPABASE_URL va NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY env qiymatlarini kiriting.",
  );
}

const restUrl = new URL("/rest/v1/", SUPABASE_URL);
const defaultHeaders = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json",
};

const toUserRecord = (user) => ({
  telegram_id: user.telegramId,
  username: user.username ?? null,
  first_name: user.firstName ?? null,
  last_name: user.lastName ?? null,
  language_code: user.languageCode ?? null,
  step: user.step ?? "none",
  is_blocked: user.isBlocked ?? false,
});

const fromUserRecord = (record) => ({
  id: record.id,
  telegramId: Number(record.telegram_id),
  username: record.username,
  firstName: record.first_name,
  lastName: record.last_name,
  languageCode: record.language_code,
  step: record.step,
  isBlocked: record.is_blocked,
  createdAt: record.created_at,
  updatedAt: record.updated_at,
});

const toUserUpdateRecord = (updates = {}) => {
  const payload = {};

  if ("username" in updates) payload.username = updates.username ?? null;
  if ("firstName" in updates) payload.first_name = updates.firstName ?? null;
  if ("lastName" in updates) payload.last_name = updates.lastName ?? null;
  if ("languageCode" in updates) {
    payload.language_code = updates.languageCode ?? null;
  }
  if ("step" in updates) payload.step = updates.step;
  if ("isBlocked" in updates) payload.is_blocked = updates.isBlocked;

  return payload;
};

async function supabaseRequest(path, { method = "GET", body, headers } = {}) {
  const response = await fetch(new URL(path, restUrl), {
    method,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const errorText = await response.text();
    const details = errorText || response.statusText || "noma'lum xato";
    throw new Error(`Supabase xatosi (${response.status}): ${details}`);
  }

  if (method === "HEAD" || response.status === 204) {
    return {
      data: null,
      count: extractCount(response),
    };
  }

  const text = await response.text();
  return {
    data: text ? JSON.parse(text) : null,
    count: extractCount(response),
  };
}

function extractCount(response) {
  const contentRange = response.headers.get("content-range");
  if (!contentRange) return null;

  const total = contentRange.split("/")[1];
  return total ? Number(total) : null;
}

function buildUsersQuery(filters = {}) {
  const params = new URLSearchParams();
  params.set("select", "*");
  params.set("order", "created_at.asc");

  if (typeof filters.isBlocked === "boolean") {
    params.set("is_blocked", `eq.${filters.isBlocked}`);
  }

  if (typeof filters.telegramId === "number") {
    params.set("telegram_id", `eq.${filters.telegramId}`);
  }

  return `users?${params.toString()}`;
}

export async function upsertUser(user) {
  const payload = [toUserRecord(user)];
  const { data } = await supabaseRequest("users?on_conflict=telegram_id", {
    method: "POST",
    body: payload,
    headers: {
      Prefer: "resolution=merge-duplicates,return=representation",
    },
  });

  return fromUserRecord(data[0]);
}

export async function updateUser(telegramId, updates) {
  const { data } = await supabaseRequest(
    `users?telegram_id=eq.${telegramId}&select=*`,
    {
      method: "PATCH",
      body: toUserUpdateRecord(updates),
      headers: {
        Prefer: "return=representation",
      },
    },
  );

  return data?.[0] ? fromUserRecord(data[0]) : null;
}

export async function getUsers(filters = {}) {
  const { data } = await supabaseRequest(buildUsersQuery(filters));
  return (data ?? []).map(fromUserRecord);
}

export async function countUsers(filters = {}) {
  const params = new URLSearchParams();
  params.set("select", "id");

  if (typeof filters.isBlocked === "boolean") {
    params.set("is_blocked", `eq.${filters.isBlocked}`);
  }

  const { count } = await supabaseRequest(`users?${params.toString()}`, {
    method: "HEAD",
    headers: {
      Prefer: "count=exact",
    },
  });

  return count ?? 0;
}

export async function verifySupabaseConnection() {
  try {
    await countUsers();
    console.log("Supabase ulandi");
  } catch (error) {
    if (String(error.message).includes("Supabase xatosi (404)")) {
      throw new Error(
        "`public.users` jadvali topilmadi. `supabase/schema.sql` faylidagi SQL'ni Supabase SQL Editor'da ishga tushiring.",
      );
    }

    throw error;
  }
}
