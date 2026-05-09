import { Component } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  imports: [],
  templateUrl: './pelicula.html',
  styleUrl: './pelicula.css',
})
export class Pelicula {
  ngOnInit(){
    console.log("el componente de pelicula esta arrancando");
  }

  ngOnDestroy(){
    console.log("el componete de pelicula ha sido eliminado")
  }
}
