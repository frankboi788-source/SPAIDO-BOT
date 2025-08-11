const fs = require('fs');

//~~~~~~~~~~~ 👑 Owner & Bot Identity ~~~~~~~~~~~//
global.owner = "349016809995";
global.developer = "2349016809995";
global.bot = "";
global.devname = "💻 Spaido Hacks";
global.ownername = "👑 Spaido Khan";
global.botname = "🤖 SPAIDO BOT";
global.versisc = "2.0.0";
global.packname = "✨ SPAIDO BOT✨";

//~~~~~~~~~~~ 🌐 Social Links ~~~~~~~~~~~//
global.linkwa = "https://chat.whatsapp.com/EXtX2ktNfsl9otjKeznsun?mode=ac_t";
global.linkyt = "https://www.youtube.com/@imranhacks";
global.linktt = "https://tiktok.com/@imranhacks";
global.linktele = "t.me/BIGSPAIDO";

//~~~~~~~~~~~ ⚙️ Bot Settings ~~~~~~~~~~~//
global.prefix = ["", "!", ".", ",", "#", "/", "🎭", "〽️"];
global.autoRecording = false;
global.autoTyping = true;
global.autorecordtype = false;
global.autoread = true;
global.autobio = true;
global.anti92 = false;
global.owneroff = false;
global.autoswview = true;

//~~~~~~~~~~~ 🖼️ Bot Thumbnails ~~~~~~~~~~~//
global.thumbbot = "https://files.catbox.moe/q04q5a.jpeg";
global.thumbown = "https://files.catbox.moe/tbhr2g.jpg";

//~~~~~~~~~~~ 📣 Channel Info ~~~~~~~~~~~//
global.idchannel = "120363402785346228@newsletter*";
global.channelname = "🌐 SPAIDO BOT UPDATES";
global.channel = "https://whatsapp.com/channel/0029VbAoVt0Bqbr1vsgafC3r";

//~~~~~~~~~~~ 💬 Custom Messages ~~~~~~~~~~~//
global.mess = {
  developer: "🛠️ *[ Developer Only ]*\nThis feature is only for bot developers!",
  owner: "👑 *[ Owner Only ]*\nOnly the owner of SPAIDO BOT can use this!",
  group: "👥 *[ Group Only ]*\nThis command works in group chats only!",
  private: "📥 *[ Private Chat Only ]*\nUse this in a private chat!",
  admin: "🛡️ *[ Admin Only ]*\nThis command is for group admins only!",
  botadmin: "🤖 *[ Bot Must Be Admin ]*\nI need admin rights to do this!",
  wait: "⏳ *Please wait...*\nProcessing your request...",
  error: "❌ *Oops!*\nAn error occurred, please try again later.",
  done: "✅ *Done!*\nSuccessfully completed your request!"
};

//~~~~~~~~~~~ 🔄 Auto Reload on Save ~~~~~~~~~~~//
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
  delete require.cache[file];
  require(file);
});
