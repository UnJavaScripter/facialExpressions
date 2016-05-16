import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FacialExpressionsAppComponent } from '../app/facial-expressions.component';

beforeEachProviders(() => [FacialExpressionsAppComponent]);

describe('App: FacialExpressions', () => {
  it('should create the app',
      inject([FacialExpressionsAppComponent], (app: FacialExpressionsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  // it('should have as title \'facial-expressions works!\'',
  //     inject([FacialExpressionsAppComponent], (app: FacialExpressionsAppComponent) => {
  //   expect(app.title).toEqual('facial-expressions works!');
  // }));
});
