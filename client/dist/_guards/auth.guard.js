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
// Routes
var router_1 = require("@angular/router");
var AuthGuard = /** @class */ (function () {
    /**
     * Create AuthGuard instance
     * @param router Router
     */
    function AuthGuard(router) {
        this.router = router;
    }
    // Public methods
    /**
     * Interfaz que una clase puede implementar para ser un guardia que decide si se puede activar una ruta.
     * @param route ActivatedRouteSnapshot route
     * @param state Current state
     */
    AuthGuard.prototype.canActivate = function (route, state) {
        var _login_provider = localStorage.getItem('_login_provider');
        if (_login_provider !== 'facebook') {
            // logged in so return true
            return true;
        }
        // Not logged in so redirect to login page with the return url
        this.router.navigate(['/peliculas']);
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
var AuthGuardSocialLogin = /** @class */ (function () {
    /**
     * Create AuthGuard instance
     */
    function AuthGuardSocialLogin(router) {
        this.router = router;
    }
    // Public methods
    /**
     * Interfaz que una clase puede implementar para ser un guardia que decide si se puede activar una ruta.
     * @param route ActivatedRouteSnapshot route
     * @param state Current state
     */
    AuthGuardSocialLogin.prototype.canActivate = function (route, state) {
        var _login_provider = localStorage.getItem('_login_provider');
        if (_login_provider) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/peliculas']);
        return false;
    };
    AuthGuardSocialLogin = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AuthGuardSocialLogin);
    return AuthGuardSocialLogin;
}());
exports.AuthGuardSocialLogin = AuthGuardSocialLogin;
//# sourceMappingURL=auth.guard.js.map