"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Libraries
var core_1 = require("@angular/core");
/**
 * `NoContentComponent` implements the not found view.
 */
var NoContentComponent = /** @class */ (function () {
    /**
     * Creates a new NoContentComponent instance.
     */
    function NoContentComponent() {
    }
    NoContentComponent = __decorate([
        core_1.Component({
            template: "\n    <div class=\"container text-center\">\n      <div class=\"row\">\n        <div class=\"col-md-12 page-404\">\n          <div class=\"number font-green\"> 404 </div>\n          <div class=\"details\">\n            <h3>Oops! Estas perdido.</h3>\n            <p>No podemos encontrar la p\u00E1gina que est\u00E1s buscando.</p>\n            <a routerLink=\"/\">Volver al inicio</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], NoContentComponent);
    return NoContentComponent;
}());
exports.NoContentComponent = NoContentComponent;
//# sourceMappingURL=no-content.component.js.map