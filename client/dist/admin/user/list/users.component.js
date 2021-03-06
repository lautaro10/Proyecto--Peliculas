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
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var ngx_toastr_1 = require("ngx-toastr");
// Services
var index_1 = require("../../../_services/index");
var UsersComponent = /** @class */ (function () {
    /**
   * Creates a new `UsersComponent` instance.
   */
    function UsersComponent(userService, toastrService) {
        this.userService = userService;
        this.toastrService = toastrService;
        /**
         * Users list
         */
        this.users = [];
        /**
         * Toggle to check if users has charged
         */
        this.isLoading = false;
        /**
         * Users selected
         */
        this.selected = [];
        /**
         * Toggle to check if user is admin or not
         */
        this.isAdmin = false;
        /**
         * Current messages error
         */
        this.messages = {
            emptyMessage: "No se encontraron usuarios"
        };
        // Private methods
        this.temp = [];
    }
    // Public methods
    /**
     * Implements on init method
     */
    UsersComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    /**
     * Users selected
     */
    UsersComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        var _b;
    };
    /**
     * Check if user can be selected
     */
    UsersComponent.prototype.checkSelectable = function (event) {
        var currentUser = JSON.parse(localStorage.getItem('_login_provider'));
        return currentUser.username !== event.username;
    };
    /**
     * Delete user
     */
    UsersComponent.prototype.removeUsers = function () {
        var _this = this;
        this.userService.delete(this.selected[0]._id).subscribe(function () {
            _this.toastrService.success('Usuario eliminado correctamente');
            _this.loadAllUsers();
        });
    };
    /**
     * Filter users
     */
    UsersComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.firstName.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.users = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    // Private methods
    /**
     * Load all users
     */
    UsersComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.isLoading = true;
        this.userService.getAll().subscribe(function (users) {
            _this.isLoading = false;
            _this.users = users;
            _this.temp = _this.users.slice();
        });
    };
    __decorate([
        core_1.ViewChild(ngx_datatable_1.DatatableComponent),
        __metadata("design:type", ngx_datatable_1.DatatableComponent)
    ], UsersComponent.prototype, "table", void 0);
    UsersComponent = __decorate([
        core_1.Component({
            moduleId: module.id.replace("/dist/", "/app/"),
            templateUrl: 'users.component.html'
        }),
        __metadata("design:paramtypes", [index_1.UserService,
            ngx_toastr_1.ToastrService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map