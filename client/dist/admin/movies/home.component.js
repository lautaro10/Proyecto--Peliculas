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
var core_1 = require("@angular/core");
var index_1 = require("../../_services/index");
var index_2 = require("../../_services/index");
var router_1 = require("@angular/router");
var angular2_social_login_1 = require("angular2-social-login");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, router, authenticationService, _auth) {
        this.userService = userService;
        this.router = router;
        this.authenticationService = authenticationService;
        this._auth = _auth;
        //_login_provider: User;
        this.users = [];
        //this._login_provider = JSON.parse(localStorage.getItem('_login_provider'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    HomeComponent.prototype.deleteUser = function (_id) {
        var _this = this;
        this.userService.delete(_id).subscribe(function () {
            _this.loadAllUsers();
        });
    };
    HomeComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    HomeComponent.prototype.logoutFace = function () {
        var _this = this;
        this._auth.logout().subscribe(function (data) {
            _this.router.navigate(['/login']);
        });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) {
            _this.users = users;
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id.replace("/dist/", "/app/"),
            templateUrl: 'home.component.html'
        }),
        __metadata("design:paramtypes", [index_2.UserService,
            router_1.Router,
            index_1.AuthenticationService,
            angular2_social_login_1.AuthService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map