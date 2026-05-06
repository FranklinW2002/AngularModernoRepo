import { Component } from "@angular/core";

@Component(
    {
        selector:'mi-perfil',
        templateUrl:'mi-perfil.html',
        styleUrl:'mi-perfil.css'
    }
)

export class MiPerfil{
constructor(){
    alert("!Bienvenido a mi perfil correctamente!");
    console.log("Se cargo el componente de perfil correctamente");
}
}