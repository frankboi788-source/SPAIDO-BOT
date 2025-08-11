const path = require('path');
const fs = require('fs');

module.exports = {
  name: "alive",
  alias: ["ping", "bot", "online"],
  description: "Check if SPAIDO BOT is alive",
  category: "core",

  async run({ conn, m, uptime }) {
    const audioPath = path.join(__dirname, '../assets/audio2.mp3');

    const formatTime = (seconds) => {
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = Math.floor(seconds % 60);
      return `${h}h ${m}m ${s}s`;
    };

    const caption = `✅ I'm alive!
⏱️ Uptime: ${formatTime(process.uptime())}`;

    await conn.sendMessage(m.chat, { text: caption }, { quoted: m });

    if (fs.existsSync(audioPath)) {
      await conn.sendMessage(m.chat, {
        audio: { url: audioPath },
        mimetype: 'audio/mp4',
        ptt: true
      }, { quoted: m });
    }
  }
};
