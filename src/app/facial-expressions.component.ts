import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'facial-expressions-app',
  templateUrl: 'facial-expressions.component.html',
  styleUrls: ['facial-expressions.component.css']
})
export class FacialExpressionsAppComponent {
  
  urlDeLaImagen: string;
  resultados: any;

  constructor() {
    console.log('¡Modulo principal cargado con éxito!');
  }

  consultarAPI(url: string){
    console.log(`La url de la imagen es ${url}`);
    this.resultados = url.split('');
  }
}
