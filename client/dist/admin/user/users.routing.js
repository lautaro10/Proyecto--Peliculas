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
var users_component_1 = require("./list/users.component");
var user_component_1 = require("./show/user.component");
/**
 * Routes for users module.
 */
var USERS_ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        component: users_component_1.UsersComponent,
    },
    {
        path: ':id',
        pathMatch: 'full',
        component: user_component_1.UserComponent,
    }
];
/**
 * `UsersRoutingModule` defines the routes of the users module.
 */
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(USERS_ROUTES)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());
exports.UsersRoutingModule = UsersRoutingModule;
/**
 * Routing components.
 */
exports.routingComponents = [
    users_component_1.UsersComponent,
    user_component_1.UserComponent,
];
//# sourceMappingURL=users.routing.js.map