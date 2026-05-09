import { Component } from '@angular/core';
import { Pelicula } from '../pelicula/pelicula';
import { Usuario } from '../usuario/usuario';
import { Ventas } from '../ventas/ventas';

@Component(
    {
        selector: 'mi-producto',
        imports: [Pelicula],
        templateUrl: 'producto.html',
        styleUrl: 'producto.css'
    }
)

export class Producto {

    public nombre: string;
    public marca: string;
    public precio!: number;

    public mostra_peliculas: Boolean = true;



    constructor() {
        this.nombre = "PC Portatil";
        this.marca = "Asus";
        this.precio = 500;
        console.log("Se ha cargado el componente de prpducto");
    }

    ngAfterView() {
        console.log("la vista esta cargada");
    }

    ngOnInit() {
        console.log("El componente esta inicializado");
    }

    ngDoCheck() {
        console.log("Compopnnte actualizado");
    }

    cambiarNombre() {
        this.nombre = "Laptop asus 177";
    }

    ocultarPeliculas(valor: Boolean) {
        this.mostra_peliculas = valor;

    }
}



