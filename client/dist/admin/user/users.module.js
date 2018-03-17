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
var common_1 = require("@angular/common");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
// Routing
var users_routing_1 = require("./users.routing");
/**
 * `UsersModule` defines a module manage users.
 */
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        core_1.NgModule({
            imports: [
                users_routing_1.UsersRoutingModule,
                common_1.CommonModule,
                ngx_datatable_1.NgxDatatableModule
            ],
            declarations: [
                users_routing_1.routingComponents,
            ],
            exports: []
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map