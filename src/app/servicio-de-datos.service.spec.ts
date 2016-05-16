import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ServicioDeDatosService } from './servicio-de-datos.service';

describe('ServicioDeDatos Service', () => {
  beforeEachProviders(() => [ServicioDeDatosService]);

  it('should ...',
      inject([ServicioDeDatosService], (service: ServicioDeDatosService) => {
    expect(service).toBeTruthy();
  }));
});
