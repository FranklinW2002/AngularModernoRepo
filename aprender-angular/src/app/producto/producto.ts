import { Component, signal } from '@angular/core';

@Component(
    {
        selector:'mi-producto',
        templateUrl:'producto.html',
        styleUrl:'producto.css'
    }
)

export class Producto{
    
    public nombre: string;
    public marca: string;
    public precio!: number;
    
    constructor(){
        this.nombre = "PC Portatil";
        this.marca = "Asus";
        this.precio = 500;
        console.log("Se ha cargado el componente de prpducto");
    }
}