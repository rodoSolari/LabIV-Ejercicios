import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicioClase01';

  public edadUno : number;
  public edadDos : number;
  public promedio : number = 0;
  public suma : number = 0;

  constructor(){
    this.edadUno = 0;
    this.edadDos = 0
  }

  ngOnInit(): void {
    console.log("inicializando ejercicio 1");

  }

  CalcularSuma(){
    this.suma = this.edadUno + this.edadDos;
  }

  CalcularPromedio(){
    this.promedio = (this.edadUno + this.edadDos)/2;
  }

  Limpiar(){
    this.edadUno = 0;
    this.edadDos = 0;
    this.suma = 0;
    this.promedio = 0;
  }

  Mostrar(){
    if(!this.isNumber(this.edadUno) || !this.isNumber(this.edadDos)){
      return true;
    }
    return false;
  }

  isNumber(value: string | number): boolean
  {
   return ((value != null) &&
           (value !== '') &&
           !isNaN(Number(value.toString())));
  }

}
