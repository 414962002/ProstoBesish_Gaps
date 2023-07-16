function setWebhook() {
  let url = telegramUrl + "/setWebhook?url=" + webAppUrl;
  let response = UrlFetchApp.fetch(url);
  console.log(response.getContentText());
}
