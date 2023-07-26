/**
 * Sends an answer to a callback query.
 *
 * @param {type} chat_id - the ID of the chat
 * @param {type} callback_query_id - the ID of the callback query
 * @param {type} text - the text of the answer
 * @return {type} undefined
 */

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