import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  nombre:string|undefined;
  apellido:string|undefined;

  mostrar(){
      console.log(this.nombre + " " + this.apellido);
  }
}
