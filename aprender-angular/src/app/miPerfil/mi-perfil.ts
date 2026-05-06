import { Component } from "@angular/core";

@Component(
    {
        selector:'mi-perfil',
        templateUrl:'mi-perfil.html',
        styleUrl:'mi-perfil.css'
    }
)

export class MiPerfil{

    public nombre: string;
    public edad: number;
    public direccion: string;
    public telefono: string;
    public ocupacion: string;
    

constructor(){
   this.nombre = "Franklin Muñoz";
   this.edad = 23;
   this.ocupacion = "Soy desarollador de Software";
   this.telefono ="0956854723";
   this.direccion = "El inca"

    console.log("Se cargo el componente de perfil correctamente");
}
}