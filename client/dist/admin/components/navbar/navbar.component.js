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
var router_1 = require("@angular/router");
var angular2_social_login_1 = require("angular2-social-login");
// Services
var logged_service_1 = require("../../../_services/logged.service");
var index_1 = require("../../../_services/index");
/**
 * `NavbarComponent`
 */
var NavbarComponent = /** @class */ (function () {
    /**
     * Creates a new `NavbarComponent` instance.
     */
    function NavbarComponent(router, authenticationService, _auth, userLogged) {
        this.router = router;
        this.authenticationService = authenticationService;
        this._auth = _auth;
        this.userLogged = userLogged;
        // Public properties
        /**
         * Toggle to check if user is admin or not
         */
        this.isAdmin = false;
        this.isAdmin = userLogged.isAdmin;
    }
    // Public methods
    /**
     * Logout social login
     */
    NavbarComponent.prototype.logoutSocialLogin = function () {
        var _this = this;
        this._auth.logout().subscribe(function (data) {
            _this.router.navigate(['/login']);
        });
    };
    /**
     * Logout admin
     */
    NavbarComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id.replace("/dist/", "/app/"),
            selector: 'navbar-component',
            templateUrl: 'navbar.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.AuthenticationService,
            angular2_social_login_1.AuthService,
            logged_service_1.LoggedService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map