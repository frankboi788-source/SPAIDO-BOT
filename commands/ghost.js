module.exports = {
  name: "ghost",
  description: "Funny command from SPAIDO BOT",
  category: "fun",
  async run({ conn, m, args }) {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const messages = ['Detected ghost activity near your phone.', 'Mic: ‘Hello... I’m behind you’ 👻', 'Spirit’s name: Bhootan Laal', 'Don’t worry, it just wants biryani.'];
    for (const msg of messages) {
      await delay(2000);
      await conn.sendMessage(m.chat, { text: msg }, { quoted: m });
    }
  }
};
