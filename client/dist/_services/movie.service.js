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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.apiKey = '3fc8dba6ae880d1320d5869f0292c276';
    }
    MovieService.prototype.getAll = function () {
        return this.http.get('/movies').map(function (response) { return response.json(); });
    };
    MovieService.prototype.getById = function (_id) {
        return this.http.get('/movies/' + _id).map(function (response) { return response.json(); });
    };
    MovieService.prototype.create = function (movie) {
        return this.http.post('/movies/register', movie);
    };
    MovieService.prototype.update = function (movie) {
        return this.http.put('/movies/' + movie._id, movie);
    };
    MovieService.prototype.delete = function (_id) {
        return this.http.delete('/movies/' + _id);
    };
    MovieService.prototype.searchMovie = function (searchMovie) {
        var url = 'https://api.themoviedb.org/3/search/movie?api_key=' + this.apiKey + '&query=' + searchMovie + '&page=1&language=es&append_to_response=images';
        return this.http.get(url, { body: true })
            .map(function (result) { return result.json(); });
    };
    MovieService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map