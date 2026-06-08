import "dotenv/config";
import TelegramBot from "node-telegram-bot-api";
import express from "express";
import {
  countUsers,
  getUsers,
  updateUser,
  upsertUser,
  verifySupabaseConnection,
} from "./db.js";
import mainMenu from "./menyu-buttons.js";

const app = express();

const port = process.env.PORT || 3000;

// --- SERVER ---
app.get("/", (req, res) => {
  res.send("Bot ishlamoqda...");
});

app.listen(port, () => {
  console.log(`Server ${port}-portda ishga tushdi!`);
});

verifySupabaseConnection().catch((error) => {
  console.error("Supabase bilan ulanishda xato:", error.message);
});

// --- BOT CONFIG ---
const mybtoko =
  process.env.BOT_TOKEN || "8318040012:AAFmUQPFJLZwJQpC0I1axuLWRi95M2INLbQ";
const bot = new TelegramBot(mybtoko, { polling: true });
const ADMIN = 907402803;

// --- DATA BAZA ---
const randomGrils = [
  "https://www.perfectgirls.xxx/pornstars/jenny-kitty/",
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
    url: "https://ic-vt-nss.xhcdn.com/a/YzViZjJjOWZmYzU1YzE1MzU4NzE4NjNiY2MyMjc1YTM/s(w:2560,h:1440),webp/028/864/352/v2/2560x1440.214.webp",
    mb: "42.5",
    time: "04:12",
    korildi: 1321,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7Y4Ov6COYSCQdk9QKe_OW_Pkd4_qBRdLUw&s",
    mb: "42.5",
    time: "04:12",
    korildi: 1321,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_XXyVC5JrrrEIwSQoWefsIkAAzDD1bKUww&s",
    mb: "62.5",
    time: "010:12",
    korildi: 3221,
  },
  {
    url: "https://img.rusoska.pics/contents/videos_screenshots/191000/191489/452x254/3.jpg",
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
    url: "https://thumb-cdn77.xnxx-cdn.com/6f800c2a-abe7-4027-a757-826127783b48/0/xn_5_t.jpg",
    mb: "42.5",
    time: "04:12",
    korildi: 3542,
  },
  {
    url: "https://huivpizde.com/uploads/posts/2022-11/1668280941_2-huivpizde-com-p-porno-uzbek-seks-rasmlar-2.jpg",
    mb: "115.0",
    time: "11:45",
    korildi: 2573,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMO6K-FdsylTYBuZX-01HcrnByxUXZ-FnxyA&s",
    mb: "30.2",
    time: "03:10",
    korildi: 1634,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMO6K-FdsylTYBuZX-01HcrnByxUXZ-FnxyA&s",
    mb: "67.8",
    time: "07:20",
    korildi: 1539,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUGexN7ZD-gLVvbtyNc0LKI8YYWBKUQ7nrg&s",
    mb: "89.1",
    time: "09:34",
    korildi: 2642,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyipNZSMapUPVP5GxlV-gIZqMyzOBtyh7pNg&s",
    mb: "140.5",
    time: "14:50",
    korildi: 3272,
  },
];

const Lezbian = [
  {
    url: "https://responsive.xxxbp.tv/aa2341448efe9f5af86d3ac120d1c337cd/645000/645072/1/nathaly-cherie-amateur-scissoring-studentents.jpg?aspect_ratio=16:9&width=480",
    mb: "55.3",
    time: "05:40",
    korildi: 2842,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe17w5EE11SFypHExiRg9bQaXCo-a1Pi4M2w&s",
    mb: "48.2",
    time: "04:55",
    korildi: 1366,
  },
  {
    url: "https://fi1-ph.ypncdn.com/videos/202311/06/442532231/original/(m=eGM68f)(mh=6R6q6rYzBamMDrZR)6.jpg",
    mb: "72.4",
    time: "08:12",
    korildi: 3799,
  },
  {
    url: "https://thumb-cdn77.xnxx-cdn.com/d84e5a35-d49f-4e04-a78b-9f98add78fbe/0/xn_18_t.jpg",
    mb: "95.0",
    time: "10:05",
    korildi: 3588,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWUmFc5jOSMG0zYME3o0OqUMEdmiR4eYUvuQ&s",
    mb: "110.6",
    time: "12:30",
    korildi: 2782,
  },
  {
    url: "https://look.buleporn.com/bbbfeeaeaa10ad88d5403370b8c6200efc/668000/668952/103/lesbian-nude-blondes-massage-embrace.jpg?aspect_ratio=16:9&width=640",
    mb: "156.2",
    time: "18:20",
    korildi: 2351,
  },
  {
    url: "https://thumbs.hqmediago.com/czechlesbians.com/e005p7/orig/hot-632x355-3187637820.jpg?gavZrZMTE5qL70N9orbyNZkOz5-eUBbO7PceSQX6aah1dqEw4nHi9UGdB0Z_6f90QOGX2jPleyUNBBBWVg8slnHyvMYBiaYU1SWyJ0F110CgJwyM3UdvhIKKw_XlqPB7PH7_vQ",
    mb: "63.7",
    time: "06:45",
    korildi: 1442,
  },
    {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xUvwGFxlxfhNcaqzptxC0BMWVONItEDu5g&s",
    mb: "43.7",
    time: "15:45",
    korildi: 5372,
  },
];

const randomvideos = [
  {
    url: "https://pimpbunny.com/contents/videos_screenshots/464000/464986/preview_720p.mp4.jpg",
    mb: "56.1",
    time: "06:10",
    korildi: 3890,
  },
  {
    url: "https://footjob-hd.net/wp-content/uploads/2020/09/Socksjob-With-Alice-Redlips-Short-Version-Alice-Redlips.jpg",
    mb: "34.2",
    time: "03:50",
    korildi: 1630,
  },
  {
    url: "https://pimpbunny.com/contents/videos_screenshots/504000/504113/800x450/1.jpg",
    mb: "88.4",
    time: "09:25",
    korildi: 3752,
  },
  {
    url: "https://pimpbunny.com/contents/videos_screenshots/481000/481662/800x450/1.jpg",
    mb: "12.5",
    time: "01:30",
    korildi: 2797,
  },
  {
    url: "https://fapello.com/content/c/h/chilllays-1/1000/chilllays-1_0002.jpg",
    mb: "45.9",
    time: "04:55",
    korildi: 3890,
  },
  {
    url: "https://cdn2.pvvstream.pro/videos/-187320292/456239897/preview_800.jpg",
    mb: "77.2",
    time: "08:40",
    korildi: 2466,
  },
  {
    url: "https://thumb-nss.xhcdn.com/a/MRqVLBhjJCPm4AZGKtXmTQ/028/178/453/320x320.50.41.webp",
    mb: "102.3",
    time: "12:15",
    korildi: 4321,
  },
  {
    url: "https://ic-nss.flixcdn.com/a/YjBjOTk4OWQwYzQ3YWZmMzhhNmZkOTM2ZDllNGM3MGI/webp%2Cs%28w%3A704%2Ch%3A440%29/xc/c1/c1NG53/frame/original/18.jpg",
    mb: "22.6",
    time: "02:20",
    korildi: 1567,
  },
  {
    url: "https://c3.ttcache.com/thumbnail/22R5Cz6rbqh/288x162/3.jpg",
    mb: "66.4",
    time: "07:12",
    korildi: 2341,
  },
  {
    url: "https://ei.phncdn.com/videos/202301/07/422861561/original/(m=qN3IU8XbeaSaaTbaAaaaa)(mh=tEZ4b2k-nfxhF9UA)0.jpg",
    mb: "91.8",
    time: "10:30",
    korildi: 2321,
  },
  {
    url: "https://thumb-cdn77.xvideos-cdn.com/6adf75cf-6355-4814-85eb-e3f1a11e5d6f/0/xv_30_p.jpg",
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
        url: "https://t.me/patrickstarsrobot?start=907402803",
      },
    ],
    [
      {
        text: "✅ Tekshirish va Ko'rish",
        callback_data: "check_subscription",
        style: "primary",
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
    const user = await upsertUser({
      telegramId: from.id,
      username: from.username,
      firstName: from.first_name,
      lastName: from.last_name,
      languageCode: from.language_code,
      isBlocked: false,
    });

    // 2. /START BUYRUG'I (Hamisha hamma narsadan ustun)
    if (text === "/start") {
      await updateUser(from.id, { step: "none", isBlocked: false });
      const users = await countUsers();

      await bot
        .setMessageReaction(chatId, msg.message_id, {
          reaction: [{ type: "emoji", emoji: "🍌" }],
        })
        .catch(() => {});

      const randomStartImg =
        randomGrils[Math.floor(Math.random() * randomGrils.length)];
      await bot.sendPhoto(chatId, randomStartImg, {
        caption: `*Salom, ${from.first_name}* 👋\n\n*Botda hozirda 750+ turdagi pornolar mavjuda 🔞 Kategoriyani tanlang va videolarni to'g'ridan-to'g'ri ko'ring.

👁 Hozir jami 8514 kishi foydalanmoqda....*`,
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
      const allUsers = await getUsers({ isBlocked: false });
      let successCount = 0;
      let blockedCount = 0;

      await bot.sendMessage(chatId, "Xabar yuborish boshlandi... 🚀");

      for (const targetUser of allUsers) {
        try {
          await bot.copyMessage(targetUser.telegramId, chatId, msg.message_id);
          successCount++;
        } catch (e) {
          const errorMsg = e.response?.body?.description || "";

          if (errorMsg.includes("blocked")) {
            blockedCount++;

            // Database'da belgilab qo'yamiz
            await updateUser(targetUser.telegramId, { isBlocked: true });
          }

          console.log("Xatolik:", errorMsg);
        }
      }

      await updateUser(from.id, { step: "none" });

      return bot.sendMessage(
        chatId,
        `✅ Yuborildi: ${successCount} ta
🚫 Botni bloklaganlar: ${blockedCount} ta`,
      );
    }

    // 4. MENYU TUGMALARI
    if (text === "🫦 Lezbian") {
      const item = Lezbian[Math.floor(Math.random() * Lezbian.length)];
      return bot.sendPhoto(chatId, item.url, {
        caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n👁️ Korildi: ${item.korildi}\n\n🔒 _Videoni yuklash uchun homiy BOT ga obuna bo'ling_`,
        reply_markup: getChannelMarkup(),
        parse_mode: "Markdown",
      });
    }
    if (text === "GEY PORNO") {
      const item = Gays[Math.floor(Math.random() * Gays.length)];
      return bot.sendPhoto(chatId, item.url, {
        caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n👁️ Korildi: ${item.korildi}\n\n🔒 _Videoni yuklash uchun homiy BOT ga obuna bo'ling_`,
        reply_markup: getChannelMarkup(),
        parse_mode: "Markdown",
        protect_content: true,
      });
    }

    if (text === "🇺🇿 Uzbekcha seks") {
      const item = Uzbekcha[Math.floor(Math.random() * Uzbekcha.length)];
      return bot.sendPhoto(chatId, item.url, {
        caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n👁️ Korildi: ${item.korildi}\n\n🔒 _Videoni yuklash uchun homiy BOT ga obuna bo'ling_`,
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
            caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n👁️ Korildi: ${item.korildi}\n\n🔒 _Videoni yuklash uchun homiy BOT ga obuna bo'ling_`,
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
        caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n👁️ Korildi: ${item.korildi}\n\n🔒 _Videoni yuklash uchun homiy BOT ga obuna bo'ling_`,
        reply_markup: getChannelMarkup(),
        parse_mode: "Markdown",
      });
    }
    if (text === "315") {
      const item = BONU[Math.floor(Math.random() * BONU.length)];
      return bot.sendPhoto(chatId, item.url, {
        caption: `✅ *Video topildi!* \n\n📹 *Fayl hajmi:* ${item.mb} MB\n⏱ *Davomiyligi:* ${item.time}\n\n👁️ Korildi: ${item.korildi}\n\n🔒 _Videoni yuklash uchun homiy BOT ga obuna bo'ling_`,
        parse_mode: "Markdown",
        reply_markup: getChannelMarkup(),
      });
    }

    // 5. ADMIN TUGMALARI
    if (from.id === ADMIN) {
      if (text === "Foydalanuvchilar soni") {
        try {
          const userCount = await countUsers();
          const blockedCount = await countUsers({ isBlocked: true });
          const activeCount = userCount - blockedCount;

          return bot.sendMessage(
            chatId,
            `*📊 Statistika:*\n
*👥 Jami:* ${userCount}
*✅ Faol :* ${activeCount},
*🚫 Aktiv emas:* ${blockedCount}`,
            {
              parse_mode: "Markdown",
            },
          );
        } catch (error) {
          console.error(error);
          return bot.sendMessage(chatId, "Xatolik yuz berdi ❌");
        }
      }
      if (text === "📤 Habar yuborish") {
        await updateUser(from.id, { step: "admin_send_post" });
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
        "*⚠️ Botdan foydalanishdan oldin homiy bot bergan kanallarga qoshilin.*\n\n🚀 Davom etish uchun quyidagi shartlarni bajaring va Video ni tomosha qiling.",
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
      text: "❌ Homiy bot bergan barcha kanallarga qo'shiling va *Готово, проверить ✅* ustiga bosing.",
      show_alert: true,
    });

    bot
      .editMessageCaption(
        `❌ *Obuna tasdiqlanmadi!* \n\nIltimos, yuqoridagi homiy bot bergan kanallarga a'zo bo'ling va pastdagi tugmani qayta bosing.`,
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
