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
// Routing
var admin_routing_1 = require("./admin.routing");
// Components
var navbar_component_1 = require("./components/navbar/navbar.component");
var no_content_component_1 = require("./no-content.component");
/**
 * `AdminModule` defines a private module that can only be accessed when logged in.
 */
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                admin_routing_1.AdminRoutingModule,
                common_1.CommonModule
            ],
            declarations: [
                admin_routing_1.routingComponents,
                navbar_component_1.NavbarComponent,
                no_content_component_1.NoContentComponent
            ],
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map