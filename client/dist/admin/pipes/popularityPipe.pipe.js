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
var PopularityPipe = /** @class */ (function () {
    function PopularityPipe() {
    }
    PopularityPipe.prototype.transform = function (id) {
        if (id < 10) {
            return 'Baja';
        }
        else if (id < 20) {
            return 'Media';
        }
        else {
            return 'Alta';
        }
    };
    PopularityPipe = __decorate([
        core_1.Pipe({
            name: 'popularityPipe',
            pure: false
        })
    ], PopularityPipe);
    return PopularityPipe;
}());
exports.PopularityPipe = PopularityPipe;
//# sourceMappingURL=popularityPipe.pipe.js.map