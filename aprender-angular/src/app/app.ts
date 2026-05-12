import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
//import { Producto } from "./producto/producto";
//import { MiPerfil } from "./miPerfil/mi-perfil";
import { Usuario } from './usuario/usuario';
import { Prestamos } from './prestamos/prestamos';

@Component({
  selector: 'app-root',
  imports: [Prestamos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Este es mi primer proyecto aprender-angular');
}
