import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-pagina-no-encontrada',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './pagina-no-encontrada.html',
  styleUrl: './pagina-no-encontrada.css',
})
export class PaginaNoEncontrada {}
