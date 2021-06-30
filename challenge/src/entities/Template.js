"use strict";
exports.__esModule = true;
exports.Template = void 0;
var Template = /** @class */ (function () {
    function Template(id, name) {
        this.tasks = [
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
        this.id = id;
        this.name = name;
    }
    return Template;
}());
exports.Template = Template;
