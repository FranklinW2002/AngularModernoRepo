import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-prestamos',
  imports: [NgStyle],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  web = 'https://amazon.com';
  redirigir = true;

  prestamo = {
    id: 1,
    tipo: "personal",
    interes: 10,
  }


  
    prestamosList = [
      { id: 1, monto: 1200, estado: 'Aprobado' },
      { id: 2, monto: 800, estado: 'Pendiente' },
      { id: 3, monto: 2500, estado: 'Aprobado' },
      { id: 4, monto: 1500, estado: 'Pendiente' },
      { id: 5, monto: 3000, estado: 'Aprobado' },
      { id: 6, monto: 950, estado: 'Pendiente' }
    ];
  


  cambioRedireccion() {
    if (this.redirigir) {
      this.redirigir = false;
    } else {
      this.redirigir = true;
    }
  }
}
