export class Usuario {
    nombre:string|undefined;
    apellido:string|undefined;

    mostrar(){
        console.log(this.nombre + " " + this.apellido);
    }
}
