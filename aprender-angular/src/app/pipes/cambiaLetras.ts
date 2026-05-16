import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

@Pipe({
    name: "cambiaLetras"
})

export class cambiaLetras implements PipeTransform {
    transform(value: string,mayus:boolean) {
        
        let resultado = value.replaceAll("e", "3")
                    .replaceAll("i", "1");

        if(mayus){
            resultado = resultado.toUpperCase();
        }
        
        return resultado;
    }
}