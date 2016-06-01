import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2ObservablesAppComponent } from '../app/ng-2-observables.component';

beforeEachProviders(() => [Ng2ObservablesAppComponent]);

describe('App: Ng2Observables', () => {
  it('should create the app',
      inject([Ng2ObservablesAppComponent], (app: Ng2ObservablesAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng-2-observables works!\'',
      inject([Ng2ObservablesAppComponent], (app: Ng2ObservablesAppComponent) => {
    expect(app.title).toEqual('ng-2-observables works!');
  }));
});
