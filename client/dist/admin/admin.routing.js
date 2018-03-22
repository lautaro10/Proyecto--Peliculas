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
var index_1 = require("../_guards/index");
// Components
var admin_component_1 = require("./admin.component");
var no_content_component_1 = require("./no-content.component");
/**
 * Routes for admin module.
 */
var ADMIN_ROUTES = [
    {
        path: '',
        component: admin_component_1.AdminComponent,
        children: [
            {
                canActivate: [index_1.AuthGuard],
                path: 'usuarios',
                loadChildren: 'app/admin/user/users.module#UsersModule'
            },
            {
                canActivate: [index_1.AuthGuardSocialLogin],
                path: 'peliculas',
                loadChildren: 'app/admin/movie/movies.module#MoviesModule'
            },
            { path: '**', component: no_content_component_1.NoContentComponent }
        ]
    }
];
/**
 * `AdminRoutingModule` defines the routes of the admin module.
 */
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(ADMIN_ROUTES)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
exports.AdminRoutingModule = AdminRoutingModule;
/**
 * Routing components.
 */
exports.routingComponents = [
    admin_component_1.AdminComponent,
    no_content_component_1.NoContentComponent
];
//# sourceMappingURL=admin.routing.js.map