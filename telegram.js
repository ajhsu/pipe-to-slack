const axios = require('axios');

const createMessageApiUrl = (text, token, chatId) => {
  return `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
    text
  )}`;
};

const telegramBot = {
  sendMessage: (text, chatId, token) => {
    axios.get(createMessageApiUrl(text, token, chatId));
  }
};

module.exports = telegramBot;
