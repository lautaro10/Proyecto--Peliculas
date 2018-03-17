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
var index_1 = require("../_services/index");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService, alertService, _auth, fb) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this._auth = _auth;
        this.fb = fb;
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createForm();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.loginForm.get('name').value, this.loginForm.get('password').value)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent.prototype.loginWithFacebook = function () {
        var _this = this;
        this._auth.login('facebook').subscribe(function (data) {
            var navigationExtras = {
                queryParams: {
                    "firstName": "Nic",
                    "lastName": "Raboy"
                }
            };
            _this.router.navigate([_this.returnUrl], navigationExtras);
        });
    };
    LoginComponent.prototype.createForm = function () {
        var _this = this;
        this.loginForm = this.fb.group({
            name: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
        this.loginForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        // (re)set validation messages now
        this.onValueChanged();
    };
    LoginComponent.prototype.onValueChanged = function (_data) {
        if (!this.loginForm) {
            return;
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id.replace("/dist/", "/app/"),
            templateUrl: 'login.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            index_1.AuthenticationService,
            index_1.AlertService,
            angular2_social_login_1.AuthService,
            forms_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map