1  
// function functionGetRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let keyboard_text = {
//   "inline_keyboard": [
//     [{ text: '1', callback_data: '1' }, { text: '2', callback_data: '2' }, { text: '3', callback_data: '3' }],
//     [{ text: '4', callback_data: '4' }, { text: '5', callback_data: '5' }, { text: '6', callback_data: '6' }],
//     [{ text: '7', callback_data: '7' }, { text: '8', callback_data: '8' }, { text: '9', callback_data: '9' }],
//     [{ text: '0', callback_data: '0' }]
//   ],
//   parse_mode: "HTML",
// }


// function sendText(chat_id, text, keyboard_text) {
//   let data = {
//     method: "post",
//     payload: {
//       method: "sendMessage",
//       chat_id: String(chat_id),
//       text: text,
//       parse_mode: "HTML",
//       reply_markup: JSON.stringify(keyboard_text)
//     }
//   }
//   UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data)
// }

// function sendAnswerCallbackQuery(chat_id, callback_query_id, text) {
//   let data = {
//     method: "post",
//     payload: {
//       method: "answerCallbackQuery",
//       chat_id: String(chat_id),
//       callback_query_id: callback_query_id,
//       text: text,
//       show_alert: false,
//       parse_mode: "HTML",
//     }
//   }
//   UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data)
// }


// function doPost(e) {

//   const contents = JSON.parse(e.postData.contents);
//   let randomNumber = functionGetRandomNumber(1, 5);

//   if (contents.message) {

//     let chatId = contents.message.from.id;
//     sendText(chatId, '<b>Cho-o-o-ze!</b>', keyboard_text);

//   } else if (contents.callback_query) {

//     const callback_query_id = contents.callback_query.id
//     let cbData = contents.callback_query.data;
//     let chatIdCb = contents.callback_query.from.id;

//     sendAnswerCallbackQuery(chatIdCb, callback_query_id, `you entered - ${cbData}`);

//     if (cbData == randomNumber) {
//       sendText(chatIdCb, `🥹`);
//       sendText(chatIdCb, `<b>There is your lucky digit -</b>  \n ` + randomNumber);
//       sendText(chatIdCb, '<b>Cho-o-o-ze!</b>', keyboard_text);

//       SpreadsheetApp.getActiveSheet().getRange('A3').clearContent()();

//     } else if (cbData != randomNumber) {

//       let monkeY = SpreadsheetApp.getActiveSheet().getRange('A3').getDisplayValue();
//       monkeY += "🤨";
//       sendText(chatIdCb, `•🅝🅞🅟🅔! It's - ${randomNumber} \n  \n You lost ${monkeY} lives`, keyboard_text);

//       let temp = [cbData, randomNumber];
//       SpreadsheetApp.getActiveSheet().getRange('A2:B2').setValues([temp]);
//       SpreadsheetApp.getActiveSheet().getRange('A3').setValue(`${monkeY}`);

//       if (monkeY === "🤨🤨🤨") {
//         sendText(chatIdCb, `🤨`, keyboard_lost);
//         SpreadsheetApp.getActiveSheet().getRange('A3').clearContent();
//       }
//     }
//   }
// }


