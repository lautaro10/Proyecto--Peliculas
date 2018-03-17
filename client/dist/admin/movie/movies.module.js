"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Libraries
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var forms_1 = require("@angular/forms");
// Routing
var movies_routing_1 = require("./movies.routing");
var genersPipe_pipe_1 = require("../pipes/genersPipe.pipe");
var idiomPipe_pipe_1 = require("../pipes/idiomPipe.pipe");
var popularityPipe_pipe_1 = require("../pipes/popularityPipe.pipe");
/**
 * `MovieModule` defines a module manage Movie.
 */
var MoviesModule = /** @class */ (function () {
    function MoviesModule() {
    }
    MoviesModule = __decorate([
        core_1.NgModule({
            imports: [
                movies_routing_1.MoviesRoutingModule,
                common_1.CommonModule,
                ngx_datatable_1.NgxDatatableModule,
                forms_1.FormsModule
            ],
            declarations: [
                movies_routing_1.routingComponents,
                genersPipe_pipe_1.GenrePipe,
                idiomPipe_pipe_1.IdiomPipe,
                popularityPipe_pipe_1.PopularityPipe
            ],
            exports: []
        })
    ], MoviesModule);
    return MoviesModule;
}());
exports.MoviesModule = MoviesModule;
//# sourceMappingURL=movies.module.js.map