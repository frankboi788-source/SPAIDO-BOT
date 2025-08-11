const settings = require('../settings.js');

function formatTime(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds %= (24 * 60 * 60);
    const hours = Math.floor(seconds / (60 * 60));
    seconds %= (60 * 60);
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);

    let time = '';
    if (days > 0) time += `${days}d `;
    if (hours > 0) time += `${hours}h `;
    if (minutes > 0) time += `${minutes}m `;
    if (seconds > 0 || time === '') time += `${seconds}s`;

    return time.trim();
}

async function pingCommand(sock, chatId, message) {
    try {
        const start = Date.now();
        await sock.sendMessage(chatId, { text: '🏓 SPAIDO BOT is pinging...' }, { quoted: message });
        const end = Date.now();
        const ping = Math.round((end - start) / 2);
        const uptime = formatTime(process.uptime());

        await sock.sendMessage(chatId, {
            text: `⚡ ${ping}ms | ⏳ ${uptime} | 🤖 Still not dead.`,
            quoted: message
        });

        // 🔹 List of online audios (add more if you want)
        const audioLinks = [
           'https://files.catbox.moe/otd4jl.mp3',

            'https://files.catbox.moe/jntfum.mp3',

            'https://files.catbox.moe/42fdvq.mp3',

            'https://files.catbox.moe/42fdvq.mp3'
        ];

        // Pick a random audio
        const randomAudio = audioLinks[Math.floor(Math.random() * audioLinks.length)];

        await sock.sendMessage(chatId, {
            audio: { url: randomAudio },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: message });

    } catch (err) {
        console.error('Ping error:', err);
        await sock.sendMessage(chatId, { text: '💀 SPAIDO BOT crashed while pinging!' });
    }
}

module.exports = pingCommand;
