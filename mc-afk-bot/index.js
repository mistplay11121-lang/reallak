require('dotenv').config();
const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  username: process.env.MC_EMAIL,
  password: process.env.MC_PASSWORD,
  host: process.env.MC_SERVER,
  version: "1.21.8"
});


bot.once('spawn', () => {
  console.log('[BOT] Spawned in the world!');

  console.log('[BOT] Sending /lifesteal...');
  bot.chat('/lifesteal');

  setTimeout(() => {
    console.log('[BOT] Sending /warp afk...');
    bot.chat('/warp afk');
  }, 15000); // 15 seconds later
});

// Log all chat messages
bot.on('chat', (username, message) => {
  console.log(`[CHAT] <${username}>: ${message}`);
});

bot.on('message', (jsonMsg) => {
  const msg = jsonMsg.toString();
  console.log(`[RAW] ${msg}`);
});

bot.on('error', err => console.log('[ERROR]', err));
bot.on('end', () => console.log('[BOT] Disconnected.'));
