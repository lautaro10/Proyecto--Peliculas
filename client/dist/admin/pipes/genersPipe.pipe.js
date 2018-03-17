"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Libraries
var core_1 = require("@angular/core");
var GenrePipe = /** @class */ (function () {
    function GenrePipe() {
    }
    GenrePipe.prototype.transform = function (id) {
        switch (id) {
            case 28:
                return 'Accion';
            case 12:
                return 'Adventura';
            case 16:
                return 'Animacion';
            case 35:
                return 'Comedia';
            case 80:
                return 'Crimen';
            case 99:
                return 'Documental';
            case 18:
                return 'Drama';
            case 10751:
                return 'Familia';
            case 14:
                return 'Fantasía';
            case 36:
                return 'Fantasía';
            case 27:
                return 'Terror';
            case 10402:
                return 'Musical';
            case 9648:
                return 'Misterio';
            case 10749:
                return 'Romance';
            case 878:
                return 'Ciencia Ficción';
            case 10770:
                return 'TV Movie';
            case 53:
                return 'Thiller';
            case 10752:
                return 'War';
            case 37:
                return 'Western';
            default:
                return '';
        }
    };
    GenrePipe = __decorate([
        core_1.Pipe({
            name: 'genrePipe',
            pure: false
        })
    ], GenrePipe);
    return GenrePipe;
}());
exports.GenrePipe = GenrePipe;
//# sourceMappingURL=genersPipe.pipe.js.map