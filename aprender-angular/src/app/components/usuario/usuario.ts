import { Component } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, DatePipe, TitleCasePipe, DatePipeConfig} from '@angular/common';
import { cambiaLetras } from '../../pipes/cambiaLetras';
import { ascii } from '../../pipes/cambiarAscii';
import { Ventas } from '../ventas/ventas';
import { Producto } from "../producto/producto";

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  web = 'https://amazon.com';
  redirigir = true;
  marcasAutos = [

    { id: 1, nombre: "Toyota" },
    { id: 2, nombre: "Kia" },
    { id: 3, nombre: "Chevrolet" },
    { id: 4, nombre: "Nissan" },
    { id: 5, nombre: "Suzuki" },
    { id: 6, nombre: "Mazda" },
    { id: 7, nombre: "Hyundai" },
  ];

  fecha = new Date(2030,12,25);

  usuario = {
    id: 1,
    nombre: "Carlos Palacios",
    nick: "Carlitos",
    rol: "as"
  };



  ngOnInit() {
    this.marcasAutos = [

    ];
  }


  cambioRedireccion() {
    if (this.redirigir) {
      this.redirigir = false;
    } else {
      this.redirigir = true;
    }
  }
}
