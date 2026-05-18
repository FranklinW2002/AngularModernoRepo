import { Component } from '@angular/core';
import { Transaccion } from '../../models/transaccion';
@Component({
  selector: 'app-transacciones',
  imports: [],
  templateUrl: './transacciones.html',
  styleUrl: './transacciones.css',
})
export class Transacciones {

  transacciones:Array<Transaccion>;
  constructor(){
    this.transacciones = [
    new Transaccion(1, new Date('2025-01-10'), 'Pago de servicios', 120.50, 'Débito'),
    new Transaccion(2, new Date('2025-02-15'), 'Transferencia recibida', 350.00, 'Crédito'),
    new Transaccion(3, new Date('2025-03-05'), 'Compra en supermercado', 89.99, 'Débito'),
    new Transaccion(4, new Date('2025-04-01'), 'Depósito bancario', 500.00, 'Crédito'),
    new Transaccion(5, new Date('2025-04-20'), 'Pago de internet', 45.75, 'Débito')
  ];
  }
}
