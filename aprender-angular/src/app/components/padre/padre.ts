import { Component } from '@angular/core';
import { Hijo } from '../hijo/hijo';

@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class Padre {

  nombrePadre:string = 'Componente padre';
  saludoRecivido:string = "";
  
  recivirSaludo(saludo:string){
    this.saludoRecivido = saludo;
  }
}
