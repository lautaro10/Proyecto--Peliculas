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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var angular2_social_login_1 = require("angular2-social-login");
var index_1 = require("./../../_services/index");
var ngx_toastr_1 = require("ngx-toastr");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authenticationService, toastr, _auth, fb, userService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.toastr = toastr;
        this._auth = _auth;
        this.fb = fb;
        this.userService = userService;
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.loginForm.get('name').value, this.loginForm.get('password').value)
            .subscribe(function (data) {
            _this.router.navigate(['/usuarios']);
            _this.toastr.success('Logueado correctamente');
        }, function (error) {
            _this.toastr.error('Credenciales incorrectas');
            _this.loading = false;
        });
    };
    LoginComponent.prototype.loginWithFacebook = function () {
        var _this = this;
        this._auth.login('facebook').subscribe(function (data) {
            _this.router.navigate(['/peliculas']);
        });
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        var user = {
            username: this.registerForm.get('userNameRegister').value,
            password: this.registerForm.get('passwordRegister').value,
            firstName: this.registerForm.get('firstNameRegister').value,
            lastName: this.registerForm.get('lastNameRegister').value,
        };
        this.userService.create(user)
            .subscribe(function (data) {
            _this.toastr.success('Registro exitoso!');
        }, function (error) {
            _this.toastr.error('Usuario ya existente');
            _this.loading = false;
        });
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            name: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
        this.registerForm = this.fb.group({
            firstNameRegister: ['', forms_1.Validators.required],
            lastNameRegister: ['', forms_1.Validators.required],
            userNameRegister: ['', forms_1.Validators.required],
            passwordRegister: ['', forms_1.Validators.required]
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id.replace("/dist/", "/app/"),
            templateUrl: 'login.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.AuthenticationService,
            ngx_toastr_1.ToastrService,
            angular2_social_login_1.AuthService,
            forms_1.FormBuilder,
            index_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map