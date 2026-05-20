import { Component, signal } from '@angular/core';
import { config } from './models/config';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Este es mi primer proyecto aprender-angular');
  titulo = config.title;
  description = config.description
}
