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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular2_social_login_1 = require("angular2-social-login");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var index_1 = require("./_helpers/index");
var index_2 = require("./_directives/index");
var index_3 = require("./_guards/index");
var index_4 = require("./_services/index");
var public_module_1 = require("./public/public.module");
var admin_module_1 = require("./admin/admin.module");
var movie_service_1 = require("./_services/movie.service");
var ngx_toastr_1 = require("ngx-toastr");
var animations_1 = require("@angular/platform-browser/animations");
var core_2 = require("@angular/core");
var logged_service_1 = require("./_services/logged.service");
var providers = {
    'facebook': {
        'clientId': '1286133531481076',
        'apiVersion': 'v2.4'
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
        angular2_social_login_1.Angular2SocialLoginModule.loadProvidersScripts(providers);
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.AppRoutingModule,
                public_module_1.PublicModule,
                admin_module_1.AdminModule,
                angular2_social_login_1.Angular2SocialLoginModule,
                forms_1.ReactiveFormsModule,
                ngx_toastr_1.ToastrModule.forRoot(),
                animations_1.BrowserAnimationsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                index_2.AlertComponent
            ],
            providers: [
                index_1.customHttpProvider,
                index_3.AuthGuard,
                index_3.AuthGuard1,
                ngx_toastr_1.ToastrService,
                index_4.AuthenticationService,
                index_4.UserService,
                movie_service_1.MovieService,
                index_4.PagerService,
                logged_service_1.LoggedService,
                { provide: core_2.LOCALE_ID, useValue: "es" }
            ],
            bootstrap: [app_component_1.AppComponent]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map