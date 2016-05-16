export class FacialExpressionsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('facial-expressions-app h1')).getText();
  }
}
