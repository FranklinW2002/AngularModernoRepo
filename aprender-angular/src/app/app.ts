import { Component, signal } from '@angular/core';
import { Cuenta } from './components/cuenta/cuenta';
import { Transacciones } from './components/transacciones/transacciones';
import { config } from './models/config';
import { Cine } from "./components/cine/cine";
import { Prestamos } from "./components/prestamos/prestamos";
import { Padre } from './components/padre/padre';
import { MiPerfil } from './components/miPerfil/mi-perfil';


@Component({
  selector: 'app-root',
  imports:[ MiPerfil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Este es mi primer proyecto aprender-angular');
  titulo = config.title;
  description = config.description
}
