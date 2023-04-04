import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio-clase-01';

  edadUno : number = 0;
  edadDos : number = 0;
  suma : number = 0;
  promedio : number = 0;

  calcular(){
    if(this.isNumber(this.edadUno) || this.isNumber(this.edadDos)){
      this.suma = this.edadUno + this.edadDos;
    }

  }

  CalcularPromedio(){
    this.promedio = (this.edadUno + this.edadDos)/2;
  }

  limpiar(){
    this.edadUno = 0;
    this.edadDos = 0;
    this.suma  = 0;
    this.promedio = 0;
  }

  Mostrar(){
    if(!this.isNumber(this.edadUno) || !this.isNumber(this.edadDos)){
      this.suma = 0;
      return true;
    }
    return false;
  }

  isNumber(value: string | number): boolean{
   return ((value != null) &&
           (value !== '') &&
           !isNaN(Number(value.toString())));
  }




}
