const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();

// BotFather থেকে পাওয়া আপনার আসল টোকেনটি এখানে বসান
const token = 'YOUR_BOT_TOKEN_HERE'; 
const bot = new TelegramBot(token, {polling: true});

// ইউজার যখন /start লিখবে তখন এই মেসেজটি যাবে
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.chat.first_name;

    const welcomeMessage = `স্বাগতম ${firstName}! 😊\n\nSKBD Reward অ্যাপে কাজ করে প্রতিদিন ইনকাম করুন। আপনার পেমেন্ট সরাসরি বিকাশ বা নগদে নিতে পারবেন।\n\n🚀 কাজ শুরু করতে নিচের বাটনে ক্লিক করুন:`;

    const options = {
        reply_markup: {
            inline_keyboard: [
                [
                    { 
                        text: "📱 Open SKBD App", 
                        web_app: { url: "https://skbd355.onrender.com" } // আপনার বর্তমান স্ট্যাটিক সাইট লিঙ্ক
                    }
                ],
                [
                    { text: "📢 Join Channel", url: "https://t.me/skbd355_official" }
                ]
            ]
        }
    };

    bot.sendMessage(chatId, welcomeMessage, options);
});

// সার্ভারকে সচল রাখার জন্য (Render এর জন্য প্রয়োজন)
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('SKBD Bot is Running!'));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
