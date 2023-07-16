function deleteWebhook() {
  let url = telegramUrl + "/deleteWebhook?url=" + webAppUrl;
  let response = UrlFetchApp.fetch(url);
  console.log(response.getContentText());
}