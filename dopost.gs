/**
 * Handles the doPost event.
 *
 * @param {Object} e - the event object
 * @return {void}
 */

function doPost(e) {

  const contents = JSON.parse(e.postData.contents);
  let randomNumber = functionGetRandomNumber(1, 5);

  if (contents.message) {

    let chatId = contents.message.from.id;
    sendText(chatId, '<b>Cho-o-o-ze!</b>', keyboard_text);

  } else if (contents.callback_query) {

    const callback_query_id = contents.callback_query.id
    let cbData = contents.callback_query.data;
    let chatIdCb = contents.callback_query.from.id;

    sendAnswerCallbackQuery(chatIdCb, callback_query_id, `you entered - ${cbData}`);

    if (cbData == randomNumber) {
      sendText(chatIdCb, `🥹`);
      sendText(chatIdCb, `<b>There is your lucky digit -</b>  \n ` + randomNumber);
      sendText(chatIdCb, '<b>Cho-o-o-ze!</b>', keyboard_text);

      SpreadsheetApp.getActiveSheet().getRange('C2').clearContent()();

    } else if (cbData != randomNumber) {

      let monkeY = SpreadsheetApp.getActiveSheet().getRange('C2').getDisplayValue();
      monkeY += "🤨";
      sendText(chatIdCb, `Nope! It's - ${randomNumber} \n  \n You lost ${monkeY} lives`, keyboard_text);

      let temp = [cbData, randomNumber];
      SpreadsheetApp.getActiveSheet().getRange('A2:B2').setValues([temp]);
      SpreadsheetApp.getActiveSheet().getRange('C2').setValue(`${monkeY}`);

      if (monkeY === "🤨🤨🤨") {
        sendText(chatIdCb, `🤨`, keyboard_lost);
        SpreadsheetApp.getActiveSheet().getRange('C2').clearContent();
      }
    }
  }
}