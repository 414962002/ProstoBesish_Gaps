function sendAnswerCallbackQuery(chat_id, callback_query_id, text) {
  let data = {
    method: "post",
    payload: {
      method: "answerCallbackQuery",
      chat_id: String(chat_id),
      callback_query_id: callback_query_id,
      text: text,
      show_alert: false,
      parse_mode: "HTML",
    }
  }
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data)
}