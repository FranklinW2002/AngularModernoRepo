import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "ascii"
})

export class ascii implements PipeTransform {

  transform(value: string): string {

    let resultado = "";

    for (let letra of value) {
      resultado += letra.charCodeAt(0) + " ";
    }

    return resultado.trim();
  }

}