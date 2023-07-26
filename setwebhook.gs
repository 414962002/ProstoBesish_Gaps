/**
 * Sets the webhook for the Telegram bot to the specified URL.
 *
 * @param {string} telegramUrl - The base URL of the Telegram bot API.
 * @param {string} webAppUrl - The URL of the web application where the bot is hosted.
 * @return {undefined} This function does not return a value.
 */

function setWebhook() {
  let url = telegramUrl + "/setWebhook?url=" + webAppUrl;
  let response = UrlFetchApp.fetch(url);
  console.log(response.getContentText());
}
