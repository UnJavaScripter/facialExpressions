import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { FacialExpressionsAppComponent, environment } from './app/';

import { Http, HTTP_PROVIDERS, Headers } from '@angular/http';


if (environment.production) {
  enableProdMode();
}

bootstrap(FacialExpressionsAppComponent, [HTTP_PROVIDERS]);
