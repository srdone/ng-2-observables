import { Ng2ObservablesPage } from './app.po';

describe('ng-2-observables App', function() {
  let page: Ng2ObservablesPage;

  beforeEach(() => {
    page = new Ng2ObservablesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng-2-observables works!');
  });
});
