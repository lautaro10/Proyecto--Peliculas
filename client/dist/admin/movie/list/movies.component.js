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
var index_1 = require("../../../_services/index");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var ngx_toastr_1 = require("ngx-toastr");
var router_1 = require("@angular/router");
var logged_service_1 = require("../../../_services/logged.service");
var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(movieService, toastrService, router, userLogged) {
        this.movieService = movieService;
        this.toastrService = toastrService;
        this.router = router;
        this.userLogged = userLogged;
        this.movies = [];
        this.isLoading = false;
        this.selected = [];
        this.temp = [];
        this.isAdmin = false;
        this.messages = {
            emptyMessage: "No se encontraron películas"
        };
        this.isAdmin = userLogged.isAdmin;
    }
    MoviesComponent.prototype.ngOnInit = function () {
        this.loadAllmovies();
    };
    MoviesComponent.prototype.onActivate = function (event) {
    };
    MoviesComponent.prototype.removeMovie = function () {
        var _this = this;
        this.movieService.delete(this.selected[0]._id).subscribe(function () {
            _this.loadAllmovies();
            _this.toastrService.success('Pelicula eliminada correctamente');
        });
        this.selected = [];
    };
    MoviesComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        var _b;
    };
    MoviesComponent.prototype.showMovie = function () {
        this.router.navigate(['peliculas', this.selected[0]._id]);
    };
    MoviesComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.title.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.movies = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    MoviesComponent.prototype.loadAllmovies = function () {
        var _this = this;
        this.isLoading = true;
        this.movieService.getAll().subscribe(function (movies) {
            _this.isLoading = false;
            _this.movies = movies;
            _this.temp = _this.movies.slice();
        });
    };
    __decorate([
        core_1.ViewChild(ngx_datatable_1.DatatableComponent),
        __metadata("design:type", ngx_datatable_1.DatatableComponent)
    ], MoviesComponent.prototype, "table", void 0);
    MoviesComponent = __decorate([
        core_1.Component({
            moduleId: module.id.replace("/dist/", "/app/"),
            templateUrl: 'movies.component.html',
            styleUrls: ['movies.component.css']
        }),
        __metadata("design:paramtypes", [index_1.MovieService,
            ngx_toastr_1.ToastrService,
            router_1.Router,
            logged_service_1.LoggedService])
    ], MoviesComponent);
    return MoviesComponent;
}());
exports.MoviesComponent = MoviesComponent;
//# sourceMappingURL=movies.component.js.map