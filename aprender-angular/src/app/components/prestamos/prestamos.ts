import { Component } from '@angular/core';

import { Prestamo } from '../../models/prestamo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prestamos',
  imports: [FormsModule],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  web = 'https://amazon.com';
  redirigir = true;
  public prestamosList: Array<Prestamo> = [];
  public monto: number = 0;
  public estado: string = "";

  constructor() {
    this.prestamosList = [
      new Prestamo(1, 1200, 'Aprobado'),
      new Prestamo(2, 800, 'Pendiente'),
      new Prestamo(3, 2500, 'Aprobado'),
      new Prestamo(4, 1500, 'Pendiente'),
      new Prestamo(5, 3000, 'Aprobado'),
      new Prestamo(6, 950, 'Pendiente')
    ]
  }
  cambioRedireccion() {
    if (this.redirigir) {
      this.redirigir = false;
    } else {
      this.redirigir = true;
    }
  }

  addPrestamo() {

    let id: number = this.prestamosList[this.prestamosList.length-1].id+1;

    this.prestamosList.push(
      new Prestamo(id, this.monto, this.estado)
    );

  }

  deletePrestamo(indice: number) {

    this.prestamosList.splice(indice, 1);

  }

}


