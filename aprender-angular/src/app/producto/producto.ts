import { Component, signal } from '@angular/core';

@Component(
    {
        selector:'mi-producto',
        templateUrl:'producto.html',
        styleUrl:'producto.css'
    }
)

export class Producto{
    constructor(){
        console.log("Se ha cargado el componente de prpducto");
        alert("hola");
    }
}