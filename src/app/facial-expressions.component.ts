import { Component } from '@angular/core';
import { ServicioDeDatosService } from './servicio-de-datos.service';
import { ObjectValues } from './object-values.pipe';


@Component({
  moduleId: module.id,
  selector: 'facial-expressions-app',
  templateUrl: 'facial-expressions.component.html',
  styleUrls: ['facial-expressions.component.css'],
  providers: [ServicioDeDatosService],
  pipes: [ObjectValues]
})
export class FacialExpressionsAppComponent {
  
  urlDeLaImagen: string = 'http://nuragroup.com/wp-content/uploads/2015/02/Fearful-Businessman.jpg';
  resultados: any;
  

  constructor(public sd: ServicioDeDatosService) { }

  consultarAPI(url: string) {
    this.resultados = '';
    
    this.sd.consultarEmocion(this.urlDeLaImagen).subscribe(
      data => this.resultados = data.json(),
      err => console.log(err),
      () => console.log('Completed!')
    );
    
  }
}
