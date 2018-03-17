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
var ngx_toastr_1 = require("ngx-toastr");
var router_1 = require("@angular/router");
var NewMovieComponent = /** @class */ (function () {
    function NewMovieComponent(movieService, toastr, router) {
        this.movieService = movieService;
        this.toastr = toastr;
        this.router = router;
        this.searchMovies = [];
        this.isLoading = false;
    }
    NewMovieComponent.prototype.saveMovie = function (movie) {
        var _this = this;
        this.isLoading = true;
        this.movieService.create(movie)
            .subscribe(function (data) {
            _this.toastr.success('Pelicula guardada con exito!');
            _this.router.navigate(['/peliculas']);
            _this.isLoading = false;
        }, function (error) {
            _this.isLoading = false;
            _this.toastr.error(error);
        });
    };
    NewMovieComponent.prototype.searchMovie = function (term) {
        var _this = this;
        if (term) {
            this.movieService.searchMovie(term).subscribe(function (res) {
                if (res.results.length > 0) {
                    var movies = res.results;
                    _this.firstThreeMovies(movies);
                }
                else {
                    _this.toastr.error('No se encontro ninguna película con ese nombre');
                }
            });
        }
    };
    NewMovieComponent.prototype.firstThreeMovies = function (movies) {
        this.searchMovies = [];
        var i = 0;
        while (i < 3 && i < movies.length) {
            this.searchMovies.push(movies[i]);
            i++;
        }
    };
    NewMovieComponent = __decorate([
        core_1.Component({
            moduleId: module.id.replace("/dist/", "/app/"),
            templateUrl: 'new-movie.component.html',
            styleUrls: ['new-movie.component.css']
        }),
        __metadata("design:paramtypes", [index_1.MovieService,
            ngx_toastr_1.ToastrService,
            router_1.Router])
    ], NewMovieComponent);
    return NewMovieComponent;
}());
exports.NewMovieComponent = NewMovieComponent;
//# sourceMappingURL=new-movie.component.js.map