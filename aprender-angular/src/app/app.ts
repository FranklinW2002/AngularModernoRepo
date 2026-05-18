import { Component, signal } from '@angular/core';
import { Cuenta } from './components/cuenta/cuenta';
import { Transacciones } from './components/transacciones/transacciones';
import { config } from './models/config';

@Component({
  selector: 'app-root',
  imports: [ Cuenta, Transacciones ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Este es mi primer proyecto aprender-angular');
  titulo = config.title;
  description = config.description
}
