
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();

const token = '8519388709:AAEhlcVtW9zHHxnf7zsLjYsd8MIrl4Gv0XM'; // এখানে আপনার বট টোকেনটি দিন
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    
    // আপনার ছবির ডিরেক্ট লিঙ্ক নিচে বসানো হয়েছে
    const photoUrl = 'https://i.ibb.co.com/2Y5NYYXj/image.jpg'; 

    const captionText = `আসসালামু আলাইকুম ${msg.chat.first_name}! 🎁\n\nSKBD Reward অ্যাপে আপনাকে স্বাগতম! এখানে বিজ্ঞাপন দেখে এবং গেম খেলে প্রতিদিন টাকা আয় করতে পারবেন।\n\n💰 ১০০% ট্রাস্টেড অ্যাপ (বিকাশ ও নগদ পেমেন্ট)।\n\n🚀 কাজ শুরু করতে নিচের 'Open App' বাটনে ক্লিক করুন:`;

    bot.sendPhoto(chatId, photoUrl, {
        caption: captionText,
        reply_markup: {
            inline_keyboard: [
                [
                    { 
                        text: "📱 Open App", 
                        web_app: { url: "https://skbd355.onrender.com" } // আপনার মিনি অ্যাপ লিঙ্ক
                    }
                ],
                [
                    { text: "📢 পেমেন্ট প্রুফ চ্যানেল", url: "https://t.me/skbd355_official" }
                ]
            ]
        }
    });
});

app.get('/', (req, res) => res.send('Bot is Running with Photo!'));
app.listen(process.env.PORT || 3000);
