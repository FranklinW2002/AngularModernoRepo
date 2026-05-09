import { Component } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  imports: [],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {

  ngOnInit(){
    console.log("cuenta ha arrancado");
  }
  ngOnDestroy(){
    console.log("Cuenta se ha destruido");
  }
}
