import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //COMO LLAMARE AL COMPONENTE PARA INVOCARLO: <app-root></app-root>
  templateUrl: './app.component.html', //DONDE ESTA LA PLANTILLA HTML DEL COMPONENTE.
  styleUrls: ['./app.component.css']  //DONDE ESTA LA PLANTILLA CSS DEL COMPONENTE.
})
export class AppComponent {
  title = 'primera-app';
  variableInput = 'Valor inicial desde el TypeScript';

  numero1 : number= 0;
  numero2 : number= 0;
  resultado : number = 0;
  imagen : string = '../assets/flecha_roja_izquierda.png';

  //CambiarTitulo(tituloNuevo : any){ CON ANY: La variable 'tituloNuevo' PUEDE SER DE CUALQUIER TIPO (JavaScript PURO)
  CambiarTitulo(tituloNuevo : string){ //La variable 'tituloNuevo' SOLO PUEDE SER DE TIPO STRING.
    this.title = tituloNuevo;
  }
  Sumar(){
    this.resultado = Number(this.numero1) + Number(this.numero2);
  }
}
