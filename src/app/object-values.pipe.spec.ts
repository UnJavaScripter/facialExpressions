import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { ObjectValues } from './object-values.pipe';

describe('ObjectValues Pipe', () => {
  beforeEachProviders(() => [ObjectValues]);

  it('should transform the input', inject([ObjectValues], (pipe: ObjectValues) => {
      expect(pipe.transform(true)).toBe(null);
  }));
});
