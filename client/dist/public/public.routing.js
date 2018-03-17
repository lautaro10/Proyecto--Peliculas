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
// Components
var login_component_1 = require("./login/login.component");
/**
 * Routes for public module.
 */
var PUBLIC_ROUTES = [
    {
        path: 'login',
        pathMatch: 'full',
        component: login_component_1.LoginComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
];
/**
 * `PublicRoutingModule` defines the routes of the public module.
 */
var PublicRoutingModule = /** @class */ (function () {
    function PublicRoutingModule() {
    }
    PublicRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(PUBLIC_ROUTES)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], PublicRoutingModule);
    return PublicRoutingModule;
}());
exports.PublicRoutingModule = PublicRoutingModule;
/**
 * Routing components.
 */
exports.routingComponents = [
    login_component_1.LoginComponent
];
//# sourceMappingURL=public.routing.js.map