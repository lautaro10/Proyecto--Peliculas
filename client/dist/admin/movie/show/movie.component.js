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
var index_1 = require("../../../_services/index");
var ngx_toastr_1 = require("ngx-toastr");
var router_2 = require("@angular/router");
var MovieComponent = /** @class */ (function () {
    function MovieComponent(route, movieService, toastr, router) {
        this.route = route;
        this.movieService = movieService;
        this.toastr = toastr;
        this.router = router;
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get position from backend
        this.sub = this.route.params.subscribe(function (params) {
            // (+) converts string 'id' to a number
            var id = params['id'];
            // Load movie
            _this.loadMovie(id);
        });
    };
    MovieComponent.prototype.viewTrailer = function (title) {
        window.open("https://www.youtube.com/results?search_query=trailer+" + title, "_blank");
    };
    MovieComponent.prototype.saveMovie = function (movie) {
        var _this = this;
        this.movieService.create(movie)
            .subscribe(function (data) {
            _this.toastr.success('Pelicula guardada con exito!');
            _this.router.navigate(['/peliculas']);
        }, function (error) {
            _this.toastr.error(error);
        });
    };
    MovieComponent.prototype.loadMovie = function (id) {
        var _this = this;
        this.movieService.getById(id)
            .subscribe(function (res) {
            _this.movie = res;
            _this.loadRecomendations(_this.movie.title);
        }, function (error) {
            // Show error
            _this.toastr.error('No existe una película con ese identificador');
            // Redirect to peliculas
            _this.router.navigate(['peliculas']);
        });
    };
    MovieComponent.prototype.loadRecomendations = function (term) {
        var _this = this;
        this.movieService.searchMovie(term).subscribe(function (res) {
            if (res.results.length > 0) {
                var movies = res.results;
                _this.firstThreeMovies(movies);
            }
            else {
                _this.toastr.error('No se encontro ninguna película con ese nombre');
            }
        });
    };
    MovieComponent.prototype.firstThreeMovies = function (movies) {
        this.recomendations = [];
        var i = 1;
        while (i < 4 && i < movies.length) {
            this.recomendations.push(movies[i]);
            i++;
        }
    };
    MovieComponent = __decorate([
        core_1.Component({
            moduleId: module.id.replace("/dist/", "/app/"),
            templateUrl: 'movie.component.html',
            styleUrls: ['movie.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            index_1.MovieService,
            ngx_toastr_1.ToastrService,
            router_2.Router])
    ], MovieComponent);
    return MovieComponent;
}());
exports.MovieComponent = MovieComponent;
//# sourceMappingURL=movie.component.js.map