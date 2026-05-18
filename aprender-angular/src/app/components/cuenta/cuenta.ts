import { Component } from '@angular/core';
import { Clientes } from '../../models/clientes';
@Component({
  selector: 'app-cuenta',
  imports: [],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {
  clientes: Array<Clientes>;
  constructor() {

    this.clientes = [
      new Clientes(1, "Carlos", "Pérez", "carlos.perez@gmail.com", 1001),
      new Clientes(2, "María", "Gómez", "maria.gomez@gmail.com", 1002),
      new Clientes(3, "Juan", "Rodríguez", "juan.rodriguez@gmail.com", 1003),
      new Clientes(4, "Ana", "Martínez", "ana.martinez@gmail.com", 1004),
      new Clientes(5, "Luis", "Herrera", "luis.herrera@gmail.com", 1005)
    ];
  }
}
