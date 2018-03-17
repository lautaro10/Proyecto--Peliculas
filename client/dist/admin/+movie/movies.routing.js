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
var router_1 = require("@angular/router");
var movies_component_1 = require("./list/movies.component");
// Components
/**
 * Routes for Movies module.
 */
var MOVIES_ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        component: movies_component_1.MoviesComponent,
    },
];
/**
 * `MoviesRoutingModule` defines the routes of the Movies module.
 */
var MoviesRoutingModule = /** @class */ (function () {
    function MoviesRoutingModule() {
    }
    MoviesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(MOVIES_ROUTES)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], MoviesRoutingModule);
    return MoviesRoutingModule;
}());
exports.MoviesRoutingModule = MoviesRoutingModule;
/**
 * Routing components.
 */
exports.routingComponents = [
    movies_component_1.MoviesComponent
];
//# sourceMappingURL=movies.routing.js.map