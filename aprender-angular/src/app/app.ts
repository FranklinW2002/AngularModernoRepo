import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
//import { Producto } from "./producto/producto";
//import { MiPerfil } from "./miPerfil/mi-perfil";
import { Usuario } from './usuario/usuario';
import { Prestamos } from './prestamos/prestamos';
import { Pelicula } from './pelicula/pelicula';
import { Ventas } from './ventas/ventas';

@Component({
  selector: 'app-root',
  imports: [Ventas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Este es mi primer proyecto aprender-angular');
}
