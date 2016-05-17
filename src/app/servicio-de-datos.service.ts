import { Injectable } from '@angular/core';
import {Http, HTTP_PROVIDERS, Headers} from '@angular/http';

@Injectable()
export class ServicioDeDatosService {
  apiUrl: string = 'https://api.projectoxford.ai/emotion/v1.0/recognize';

  constructor(public http: Http) { }
  
  consultarEmocion(direccionDeLaImagen: string) {
    
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': '58438078c43844b283fd5dfae398ead2'
    });

    let dato = JSON.stringify({ "url": 'http://farm7.static.flickr.com/6071/6083328037_93eb5c88e8_b.jpg' })

    return this.http.post(this.apiUrl, dato, { headers: headers });

      
  }

}
