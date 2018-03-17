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
var IdiomPipe = /** @class */ (function () {
    function IdiomPipe() {
    }
    IdiomPipe.prototype.transform = function (id) {
        switch (id) {
            case 'en':
                return 'Inglés';
            case 'es':
                return 'Español';
            case 'ger':
                return 'Alemán';
            case 'fr':
                return 'Francés';
            case 'it':
                return 'Italiano';
            default:
                return 'Inglés';
        }
    };
    IdiomPipe = __decorate([
        core_1.Pipe({
            name: 'idiomPipe',
            pure: false
        })
    ], IdiomPipe);
    return IdiomPipe;
}());
exports.IdiomPipe = IdiomPipe;
//# sourceMappingURL=idiomPipe.pipe.js.map