import { Component } from '@angular/core';
import { Peliculas } from '../../models/peliculas';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cine',
  imports: [FormsModule],
  templateUrl: './cine.html',
  styleUrl: './cine.css',
})
export class Cine {
  public titulo: string;
  public peliculas: Array<Peliculas>;

  public peli:Array<string>;

  //para los formularios y binding bidereccional
  public mi_pelicula:string="";
  constructor() {
    this.titulo = "Modelos";
    this.peliculas = [
      new Peliculas(1, "Toy Story", "Aventura", "Jhon Lasseter", 1985, "Disney Plus", true),
      new Peliculas(2, "Shrek", "Comedia", "Andrew Adamson", 2001, "Netflix", true),
      new Peliculas(3, "Spider-Man: No Way Home", "Acción", "Jon Watts", 2021, "HBO Max", true),
      new Peliculas(4, "Interstellar", "Ciencia Ficción", "Christopher Nolan", 2014, "Prime Video", true),
      new Peliculas(5, "Coco", "Animación", "Lee Unkrich", 2017, "Disney Plus", true),
      new Peliculas(6, "Titanic", "Romance", "James Cameron", 1997, "Star Plus", false),
    ];
    this.peli = [];
  }

  ngOnInit(){
    console.log(this.peliculas);
    this.peliculas[1].titulo = "SHERK 3"
  }
  ngDoCheck(){
    console.log(this.mi_pelicula);
  }
  showPelicula(){
    alert(this.mi_pelicula);
  }
  addPelicula(){
    let identificador = this.peliculas[this.peliculas.length-1].id+1;
    let nuevaPelicula = new Peliculas(identificador,this.mi_pelicula);
    this.peliculas.push(nuevaPelicula);
  }
}
