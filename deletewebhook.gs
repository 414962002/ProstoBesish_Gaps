/**
 * Deletes the webhook by making a DELETE request to the Telegram API.
 *
 * @param {String} url - The URL of the Telegram API.
 * @param {String} webAppUrl - The URL of the web application.
 * @return {String} The response content text.
 */

function deleteWebhook() {
  let url = telegramUrl + "/deleteWebhook?url=" + webAppUrl;
  let response = UrlFetchApp.fetch(url);
  console.log(response.getContentText());
}