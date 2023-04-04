import { Component } from '@angular/core';

export class UsuarioComponent {
  nombre:string|undefined;
  apellido:string|undefined;

  mostrar(){
      console.log(this.nombre + " " + this.apellido);
  }
}
