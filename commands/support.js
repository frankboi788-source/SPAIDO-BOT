module.exports = {
  name: "support",
  alias: ["helpbot", "support", "SPAIDOsupport"],
  description: "Get SPAIDO BOT support links and contact info",
  category: "general",
  async run({ conn, m }) {
    const caption = `🛠️ *SPAIDO BOT - SUPPORT CENTER* 🛠️

📣 *Official Channel:*  


💬 *WhatsApp Support Group:*  
https://chat.whatsapp.com/EXtX2ktNfsl9otjKeznsun?mode=ac_t

📲 *Telegram Support:*  
t.me/BIGSPAIDO

🧑‍💻 *GitHub Repository:*  
https://github.com/bigspaido/SPAIDO-BOT/tree/main

📞 *Bot Admin:*  
wa.me/2349016809995

📞 *Bot Owner:*  
wa.me/349016809995

🧠 Use *.menu* to explore commands.
💥 Stay updated and have fun using SPAIDO BOT!`;

    await conn.sendMessage(m.chat, {
      text: caption,
      mentions: [m.sender]
    }, { quoted: m });
  }
};
