export class Ng2ObservablesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-2-observables-app h1')).getText();
  }
}
