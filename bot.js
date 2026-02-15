import TelegramBot from "node-telegram-bot-api";
import express from "express";
import mongoose from "./db.js";
import mainMenu from "./menyu-buttons.js";

const app = express();
const port = process.env.PORT || 3000;

// --- DATABASE SCHEMA ---
const userSchema = new mongoose.Schema({
  telegramId: { type: Number, unique: true },
  username: String,
  firstName: String,
  lastName: String,
  languageCode: String,
  step: { type: String, default: "none" },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

// --- SERVER ---
app.get("/", (req, res) => {
  res.send("Bot ishlamoqda...");
});

app.listen(port, () => {
  console.log(`Server ${port}-portda ishga tushdi!`);
});

// --- BOT CONFIG ---
const mybtoko = "8318040012:AAFmUQPFJLZwJQpC0I1axuLWRi95M2INLbQ";
const bot = new TelegramBot(mybtoko, { polling: true });
const ADMIN = 907402803;

// --- DATA BAZA ---
const randomGrils = [
  "https://rusporn.porn/thumbs/18545/thumb1.1.jpg",
  "https://ei.phncdn.com/videos/202504/17/467407535/original/(m=qH10JG0beaSaaTbaAaaaa)(mh=uaYzqfZa_Lzbhv0Z)0.jpg",
  "https://ic-vt-nss.xhcdn.com/a/MjNiMjNhNGEwNWZlMTE2ZDMxNzdmMWZjNDBiOGNhOTA/s(w:1280,h:720),webp/025/479/908/1280x720.17317671.jpg",
  "https://ei.phncdn.com/videos/202302/02/424608301/original/(m=qM9U79XbeaSaaTbaAaaaa)(mh=fasbP8zV8Lru9-0I)0.jpg",
];

const Gays = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrvZLoyrB-mvEMJM9kQ5y3lQFNi4f2t_v84g&s",
    mb: "122.5",
    time: "14:12",
    korildi: 3542,
  },
  {
    url: "https://ic-vt-nss.xhcdn.com/a/MzkwZTIxMDMwN2U2ZjJiYjNhZDcyYjE1M2U3MzA3NDQ/s(w:2560,h:1440),webp/026/583/379/v2/2560x1440.229.webp",
    mb: "102.5",
    time: "8:12",
    korildi: 2471,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfJk12dx00Xqw39NgMDFoSoL8hS03S-7TiLQ&s",
    mb: "213.5",
    time: "18:12",
    korildi: 2132,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqlqUwA4TIDgaZ--D13gzrdptIalpo5BPWAA&s",
    mb: "312.5",
    time: "14:12",
    korildi: 3112,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6roFqJDIZMkGs_ia9VnDDE4khaZ-r_4jImw&s",
    mb: "202.5",
    time: "10:02",
    korildi: 2113,
  },
  {
    url: "https://c7645702f5.mjedge.net/blog/wp-content/uploads/2022/06/Gay-Porn-Stars-Orgy-Lucas-Men-All-Access-Group-Sex-Bareback-Fuck.jpg",
    mb: "321.5",
    time: "30:10",
    korildi: 1542,
  },
];

const Detiski = [
  {
    url: "angelica-and-juliana.jpg",
    mb: "42.5",
    time: "04:12",
    korildi: 3542,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX736trEwEhv4mX2xFbdTtW0G7HiIUtLGNhw&s",
    mb: "45",
    time: "07:12",
    korildi: 4211,
  },
  {
    url: "ajjyx87x.jpg",
    mb: "42.5",
    time: "04:12",
    korildi: 3542,
  },
  {
    url: "mod4sodb.jpg",
    mb: "42.5",
    time: "04:12",
    korildi: 3542,
  },
  {
    url: "https://avatars.mds.yandex.net/i?id=1605468c253441d0aafc625def6a53ab1a44d746-10586727-images-thumbs&n=13",
    mb: "42.5",
    time: "04:12",
    korildi: 3542,
  },
  {
    url: "https://avatars.mds.yandex.net/i?id=9efbf9061384557dc4e1a11ffdf3744a95debca6-5297106-images-thumbs&n=13",
    mb: "42.5",
    time: "04:12",
    korildi: 3542,
  },
  {
    url: "https://c8b8a8134e.mjedge.net/contents/videos_screenshots/608000/608296/preview.jpg",
    mb: "42.5",
    time: "04:12",
    korildi: 3542,
  },
];

const Uzbekcha = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmpNgRkZQ9h9FPtRUn4J8z12i_qYfUnHTvvA&s",
    mb: "42.5",
    time: "04:12",
    korildi: 1321,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBPtcqvWtWp32hiD36IuEth9aKpj7VJoV3fg&s",
    mb: "42.5",
    time: "04:12",
    korildi: 1321,
  },
  {
    url: "https://ic-vt-nss.xhcdn.com/a/YTBjMjVjODVjMzFkYjllY2YwNmE3NjdhYmQ3NGM2NWQ/s(w:2560,h:1440),webp/013/767/716/v2/2560x1440.208.webp",
    mb: "62.5",
    time: "010:12",
    korildi: 3221,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_XXyVC5JrrrEIwSQoWefsIkAAzDD1bKUww&s",
    mb: "93.2",
    time: "14:12",
    korildi: 1220,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFEPLwt41Vt1uL8a2Wa1QC6kOfgtN1dZUwxA&s",
    mb: "120.5",
    time: "05:12",
    korildi: 2321,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSHv0Tk9gBlbupj91owRhFtZcHGwP616gjA&s",
    mb: "42.5",
    time: "04:12",
    korildi: 3542,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQheZCHykhyyuxqcYZL1Cg8BKySviN1isHITw&s",
    mb: "115.0",
    time: "11:45",
    korildi: 2573,
  },
  {
    url: "https://ic-nss.flixcdn.com/a/MThhNjUyNzgwNzlhNWZiMDczNjBkNTUzMmVmMzYzMWM/webp%2Cs%28w%3A240%2Ch%3A150%29/xc/q8/q86V81/frame/original/13.jpg",
    mb: "30.2",
    time: "03:10",
    korildi: 1634,
  },
  {
    url: "https://ic-vt-nss.xhcdn.com/a/ZDVmZmY5ZmMxZjZiMjQ5NmNjOWMyNDlhNDY3MGE4Mzk/s(w:2560,h:1440),webp/002/345/812/2560x1440.8.webp",
    mb: "67.8",
    time: "07:20",
    korildi: 1539,
  },
  {
    url: "https://ic-vt-nss.xhcdn.com/a/MmI2YzhlOTEzZmUwM2IwMTZkYTZiNTQ3MGFkYmJlNjc/s(w:1280,h:720),webp/019/454/938/1280x720.1.jpg",
    mb: "89.1",
    time: "09:34",
    korildi: 2642,
  },
  {
    url: "https://ic-vt-nss.xhcdn.com/a/YTFhNWIzOTVlNTBmODBjOTJjMDAxYjk4MjAwNzc2ZmM/s(w:2560,h:1440),webp/026/676/495/v2/2560x1440.212.webp",
    mb: "140.5",
    time: "14:50",
    korildi: 3272,
  },
];

const Lezbian = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlO2qXWLH5NgXxuv9aWn2KI9KzM-kUSF5CQ&s",
    mb: "55.3",
    time: "05:40",
    korildi: 2842,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78QqL2xi75fqYBAxMxYOZ1BepBe6G5VKpSw&s",
    mb: "48.2",
    time: "04:55",
    korildi: 1366,
  },
  {
    url: "https://trahkino.me/contents/videos_screenshots/137000/137617/preview.mp4.jpg",
    mb: "72.4",
    time: "08:12",
    korildi: 3799,
  },
  {
    url: "https://thumb-cdn77.xnxx-cdn.com/cd2275ed-899e-4491-a657-e9b6ff43797c/0/xn_25_p.jpg",
    mb: "95.0",
    time: "10:05",
    korildi: 3588,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0YMWfGFsNe_DoBf5PQmJKMLsj6Wt6MOnJOQ&s",
    mb: "110.6",
    time: "12:30",
    korildi: 2782,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSiR4MZcLIRh4UcKGy6NPzUgwyQviAEHfvQ&s",
    mb: "156.2",
    time: "18:20",
    korildi: 2351,
  },
  {
    url: "https://caps1cdn.adultempire.com/720/3218105_1090/girls-night-in-trans-lesbian-fuck.jpg",
    mb: "63.7",
    time: "06:45",
    korildi: 1442,
  },
];

const randomvideos = [
  {
    url: "https://thumbs.yasex.net/8789/thumbs.jpg",
    mb: "56.1",
    time: "06:10",
    korildi: 3890,
  },
  {
    url: "https://thumbs.yasex.net/10085/thumbs.jpg",
    mb: "34.2",
    time: "03:50",
    korildi: 1630,
  },
  {
    url: "https://thumbs.yasex.net/9868/thumbs.jpg",
    mb: "88.4",
    time: "09:25",
    korildi: 3752,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAdcbGfbe6CE3ZhbvOq5vvzoM8p5neijSBg&s",
    mb: "12.5",
    time: "01:30",
    korildi: 2797,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevh5r4Tf3ltYRrhNbgRdA4Kf5j2N6ldbqkQ&s",
    mb: "45.9",
    time: "04:55",
    korildi: 3890,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVQuVR6x3q6dhWwvbUvosS0o21emd_Br-wg&s",
    mb: "77.2",
    time: "08:40",
    korildi: 2466,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTSRhwq2ODT5buSO0yAqcALswoHrRu0gQAgw&s",
    mb: "102.3",
    time: "12:15",
    korildi: 4321,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTSRhwq2ODT5buSO0yAqcALswoHrRu0gQAgw&s",
    mb: "22.6",
    time: "02:20",
    korildi: 1567,
  },
  {
    url: "https://sex-studentki.live/images/22617.jpg?00",
    mb: "66.4",
    time: "07:12",
    korildi: 2341,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT167Wyg_2lQM-kvODYzEA5witbzqs3Opnpaw&s",
    mb: "91.8",
    time: "10:30",
    korildi: 2321,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGhXTihH0b2EFKajzhw3vSSj6CMPTaWf_yQ&s",
    mb: "54.7",
    time: "06:05",
    korildi: 5222,
  },
  { url: "https://t.me/eyrotik/128", mb: "39.2", time: "04:15", korildi: 2533 },
  { url: "https://t.me/eyrotik/70", mb: "82.5", time: "09:00", korildi: 3865 },
  { url: "https://t.me/eyrotik/34", mb: "47.3", time: "05:10", korildi: 4100 },
  { url: "https://t.me/eyrotik/6", mb: "15.4", time: "01:55", korildi: 2699 },
];
const BONU = [
  { url: "bonu.png", mb: 16.3, time: "08:10", korildi: 389 },
  { url: "bonus.png", mb: 76.8, time: "08:10", korildi: 451 },
];

// --- MARKUP ---
const getChannelMarkup = () => ({
  inline_keyboard: [
    [
      {
        text: "➕ 1 - Qo'shilish",
        url: "https://t.me/PandosStarsBot?start=907402803",
      },
    ], [
      {
        text: "➕ 2 - Qo'shilish",
        url: "https://t.me/panjara_ortida_prison_berk",
      },
    ],
    [
      {
        text: "✅ Tekshirish va Ko'rish",
        callback_data: "check_subscription",
      },
    ],
  ],
});

const ADMIN_MENU = {
  keyboard: [
    ["Foydalanuvchilar soni"],
    ["📤 Habar yuborish", "➕ Kanal qoshish"],
  ],
  resize_keyboard: true,
};

// --- LOGIC ---
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const from = msg.from;

  if (!text && !msg.photo && !msg.video) return;

  try {
    // 1. Userni bazada saqlash/yangilash
    const user = await User.findOneAndUpdate(
      { telegramId: from.id },
      {
        username: from.username,
        firstName: from.first_name,
        lastName: from.last_name,
        languageCode: from.language_code,
      },
      { upsert: true, new: true },
    );

    // 2. /START BUYRUG'I (Hamisha hamma narsadan ustun)
    if (text === "/start") {
      await User.updateOne({ telegramId: from.id }, { step: "none" });

      await bot
        .setMessageReaction(chatId, msg.message_id, {
          reaction: [{ type: "emoji", emoji: "🍌" }],
        })
        .catch(() => {});

      const randomStartImg =
        randomGrils[Math.floor(Math.random() * randomGrils.length)];
      await bot.sendPhoto(chatId, randomStartImg, {
        caption: `*Salom, ${from.first_name}* 👋\n\n*🔞 Kategoriyani tanlang va videolarni to'g'ridan-to'g'ri ko'ring.

👁 Hozir botdan 5,834 kishi foydalanmoqda....*`,
        reply_markup: mainMenu,
        parse_mode: "Markdown",
      });

      if (from.id === ADMIN) {
        await bot.sendMessage(chatId, "Salom admin 👑", {
          reply_markup: ADMIN_MENU,
        });
      }
      return;
    }

    // 3. ADMIN XABAR YUBORISH BOSQICHI
    if (user.step === "admin_send_post" && from.id === ADMIN) {
      const allUsers = await User.find();
      let count = 0;
      let blockedCount = 0;

      await bot.sendMessage(chatId, `Xabar yuborish boshlandi... 🚀`);

      for (const targetUser of allUsers) {
        try {
          await bot.copyMessage(targetUser.telegramId, chatId, msg.message_id);
          count++;
        } catch (e) {
          blockedCount++;
          await User.deleteOne({ telegramId: targetUser.telegramId });
        }
      }

      await User.updateOne({ telegramId: from.id }, { step: "none" });
      return bot.sendMessage(
        chatId,
        `✅ Xabar yuborildi: ${count} ta\n🗑 Bloklaganlar o'chirildi: ${blockedCount} ta`,
      );
    }

    // 4. MENYU TUGMALARI
    if (text === "🫦 Lezbian") {
      const item = Lezbian[Math.floor(Math.random() * Lezbian.length)];
      return bot.sendPhoto(chatId, item.url, {
        caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n👁️ Korildi: ${item.korildi}\n\n🔒 _Videoni yuklash uchun homiy kanallarga obuna bo'ling_`,
        reply_markup: getChannelMarkup(),
        parse_mode: "Markdown",
      });
    }
    if (text === "GEY PORNO") {
      const item = Gays[Math.floor(Math.random() * Gays.length)];
      return bot.sendPhoto(chatId, item.url, {
        caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n👁️ Korildi: ${item.korildi}\n\n🔒 _Videoni yuklash uchun homiy kanallarga obuna bo'ling_`,
        reply_markup: getChannelMarkup(),
        parse_mode: "Markdown",
        protect_content: true,
      });
    }

    if (text === "🇺🇿 Uzbekcha seks") {
      const item = Uzbekcha[Math.floor(Math.random() * Uzbekcha.length)];
      return bot.sendPhoto(chatId, item.url, {
        caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n👁️ Korildi: ${item.korildi}\n\n🔒 _Videoni yuklash uchun homiy kanallarga obuna bo'ling_`,
        reply_markup: getChannelMarkup(),
        parse_mode: "Markdown",
      });
    }

    if (
      text === "🇷🇺 Ruscha" ||
      text === "🇺🇸 Inglizcha" ||
      text === "🔥 Top Videolar"
    ) {
      const item =
        randomvideos[Math.floor(Math.random() * randomvideos.length)];
      return bot.sendPhoto(chatId, item.url, {
        caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n👁️ Korildi: ${item.korildi}\n\n🔒 _Videoni yuklash uchun homiy kanallarga obuna bo'ling_`,
        reply_markup: getChannelMarkup(),
        parse_mode: "Markdown",
      });
    }

    if (text === "Random 🎲") {
      const loadingMsg = await bot.sendMessage(
        chatId,
        "🔍 *Video bazadan qidirilmoqda...*",
        { parse_mode: "Markdown" },
      );
      setTimeout(async () => {
        try {
          await bot
            .deleteMessage(chatId, loadingMsg.message_id)
            .catch(() => {});
          const item =
            randomvideos[Math.floor(Math.random() * randomvideos.length)];
          await bot.sendPhoto(chatId, item.url, {
            caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n👁️ Korildi: ${item.korildi}\n\n🔒 _Videoni yuklash uchun homiy kanallarga obuna bo'ling_`,
            reply_markup: getChannelMarkup(),
            parse_mode: "Markdown",
          });
        } catch (e) {}
      }, 1500);
      return;
    }

    if (text === "👧 Detski sex") {
      const item = Detiski[Math.floor(Math.random() * Detiski.length)];
      return bot.sendPhoto(chatId, item.url, {
        caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n👁️ Korildi: ${item.korildi}\n\n🔒 _Videoni yuklash uchun homiy kanallarga obuna bo'ling_`,
        reply_markup: getChannelMarkup(),
        parse_mode: "Markdown",
      });
    }
    if (text === "315") {
      const item = BONU[Math.floor(Math.random() * BONU.length)];
      return bot.sendPhoto(chatId, item.url, {
        caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n👁️ Korildi: ${item.korildi}\n\n🔒 _Videoni yuklash uchun homiy kanallarga obuna bo'ling_`,
        parse_mode: "Markdown",
        reply_markup: getChannelMarkup(),
      });
    }

    // 5. ADMIN TUGMALARI
    if (from.id === ADMIN) {
      if (text === "Foydalanuvchilar soni") {
        const userCount = await User.countDocuments();
        return bot.sendMessage(chatId, `Foydalanuvchilar soni: ${userCount}`);
      }
      if (text === "📤 Habar yuborish") {
        await User.updateOne(
          { telegramId: from.id },
          { step: "admin_send_post" },
        );
        return bot.sendMessage(
          chatId,
          "Yubormoqchi bo‘lgan habaringizni yuboring ✍️ (Rasm, video yoki matn)\n\nBekor qilish uchun /start bosing.",
        );
      }
      if (text === "➕ Kanal qoshish") {
        return bot.sendMessage(chatId, "Kanal linkini yuboring 🔗");
      }
    }

    // Hech qaysi shartga tushmasa
    if (from.id !== ADMIN) {
      await bot.sendMessage(
        chatId,
        "*⚠️ Botdan foydalanishdan oldin homiy bot bergan kanallarga qoshilin.*\n\n_Barcha kanalga qoshilgandan song_ *✅ Проверить падписки* _tugmasini bosing._",
        {
          reply_markup: getChannelMarkup(),
          parse_mode: "Markdown",
        },
      );
    }
  } catch (error) {
    console.error("Xato:", error.message);
  }
});

// CALLBACK QUERY
bot.on("callback_query", async (query) => {
  const chatId = query.message.chat.id;
  const messageId = query.message.message_id;

  if (query.data === "check_subscription") {
    await bot.answerCallbackQuery(query.id, {
      text: "❌ Homiy bot bergan barcha kanallarga qo'shiling va *✅ Проверить падписки* ustiga bosing.",
      show_alert: true,
    });

    bot
      .editMessageCaption(
        `❌ *Obuna tasdiqlanmadi!* \n\nIltimos, yuqoridagi kanallarga a'zo bo'ling va pastdagi tugmani qayta bosing.`,
        {
          chat_id: chatId,
          message_id: messageId,
          reply_markup: getChannelMarkup(),
          parse_mode: "Markdown",
        },
      )
      .catch(() => {});
  }
});

process.on("uncaughtException", (err) => console.log("Kritik xato:", err));
console.log("🔥 Bot barcha URL'lar bilan xatosiz ishga tushdi!");





