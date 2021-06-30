export class Template {

    id: number;
    name: string;
    tasks: any = [

        {
            id: 1,
            descripcion: 'tareaPredeterminada_1',
            completada: false
        },

        {
            id: 2,
            descripcion: 'tareaPredeterminada_2',
            completada: false
        },

        {
            id: 3,
            descripcion: 'tareaPredeterminada_3',
            completada: false
        }
    ];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

}

