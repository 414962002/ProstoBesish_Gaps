function sendText(chat_id, text, keyboard_text) {
  let data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chat_id),
      text: text,
      parse_mode: "HTML",
      reply_markup: JSON.stringify(keyboard_text)
    }
  }
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data)
}