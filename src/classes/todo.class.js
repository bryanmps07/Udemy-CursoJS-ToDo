
export class Todo {

    constructor( tarea ) {

        this.tarea = tarea;

        this.id         = new Date().getTime(); // 128754545
        this.completado = false;
        this.creado     = new Date();

    }
}