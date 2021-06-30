 class Task {

    id: number;
    descripcion: string;
    completed:boolean

    constructor(id: number, descripcion: string, completed: boolean) {
        this.id = id;
        this.descripcion = descripcion;
        this.completed = completed;
    }

}

module.exports = Task;