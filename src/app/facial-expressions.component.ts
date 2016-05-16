import { Component } from '@angular/core';
import { ServicioDeDatosService } from './servicio-de-datos.service';

@Component({
  moduleId: module.id,
  selector: 'facial-expressions-app',
  templateUrl: 'facial-expressions.component.html',
  styleUrls: ['facial-expressions.component.css'],
  providers: [ServicioDeDatosService]
})
export class FacialExpressionsAppComponent {
  
  urlDeLaImagen: string;
  resultados: any;

  constructor(sd: ServicioDeDatosService) {

    sd.consultarEmocion(this.urlDeLaImagen).subscribe(
      data => this.resultados = data.json(),
      err => console.log(err),
      () => console.log('Completed!')
    );

  }

  consultarAPI(url: string){
    console.log(`La url de la imagen es ${url}`);
    this.resultados = url.split('');
  }
}
