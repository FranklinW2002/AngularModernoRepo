import { Component } from "@angular/core";
import { Cuenta } from "../cuenta/cuenta";
import { Prestamos } from "../prestamos/prestamos";
import { Transacciones } from "../transacciones/transacciones";

@Component(
    {
        selector: 'mi-perfil',
        imports: [Cuenta, Prestamos, Transacciones],
        templateUrl: 'mi-perfil.html',
        styleUrl: 'mi-perfil.css'
    }
)

export class MiPerfil {

    public nombre: string;
    public edad: number;
    public direccion: string;
    public telefono: string;
    public ocupacion: string;
    public mostrar_cuenta:Boolean=true;     

    constructor() {
        this.nombre = "Franklin Muñoz";
        this.edad = 23;
        this.ocupacion = "Soy desarollador de Software";
        this.telefono = "0956854723";
        this.direccion = "El inca"

        console.log("Se cargo el componente de perfil correctamente");
    }

    ngDoCheck(){
        console.log("Componente actualizado");
    }

    cambiarEdad(){
        this.edad = 50;
    }

    cambiarDireccion(){
        this.direccion = "tu corazon bb"
    }
    ngOnInit(){
        console.log("El componente esta arranado");
    }

    mostarCuenta(valor: Boolean){
        this. mostrar_cuenta = valor;
    }
}