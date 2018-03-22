// Libraries
import {
	Component,
	OnInit,
	ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ToastrService } from 'ngx-toastr';
import * as lodash from 'lodash';

// Models
import { User } from '../../../_models/index';

// Services
import { UserService } from '../../../_services/index';

@Component({
    moduleId: module.id.replace("/dist/", "/app/"),
    templateUrl: 'users.component.html'
})

export class UsersComponent implements OnInit {
	// Public properties
	/**
	 * Current table to user show
	 */
	@ViewChild(DatatableComponent) table: DatatableComponent;
	/**
	 * Users list
	 */
	users: User[] = [];
	/**
	 * Toggle to check if users has charged
	 */
	isLoading = false;
	/**
	 * Users selected
	 */
	selected: any = [];
	/**
	 * Toggle to check if user is admin or not
	 */
	isAdmin = false;
	/**
	 * Current messages error
	 */
	messages = {
		emptyMessage: "No se encontraron usuarios"
	}

	// Private methods
	temp: any = [];

	/**
   * Creates a new `UsersComponent` instance.
   */
	constructor (
		private userService: UserService,
		private toastrService: ToastrService
	) {}

	// Public methods
	/**
	 * Implements on init method
	 */
	ngOnInit() {
		this.loadAllUsers();
	}
	
	/**
	 * Users selected
	 */
  onSelect({ selected }: any) {
    this.selected.splice(0, this.selected.length);
		this.selected.push(...selected);
	}

	/**
	 * Check if user can be selected
	 */
	checkSelectable(event: any) {
		const currentUser = JSON.parse(localStorage.getItem('_login_provider'));
		return currentUser.username !== event.username;
  }

	/**
	 * Delete user
	 */
	removeUsers() {
		this.userService.delete(this.selected[0]._id).subscribe(() => {
			this.toastrService.success('Usuario eliminado correctamente');
			this.loadAllUsers();
		});
	}

	/**
	 * Filter users
	 */
	updateFilter(event: any) {
    const val = event.target.value.toLowerCase();
		// filter our data
    const temp = this.temp.filter(function(d: any) {
      return d.firstName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.users = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

	// Private methods
	/**
	 * Load all users
	 */
	private loadAllUsers() {
		this.isLoading = true;
		this.userService.getAll().subscribe(users => {
			this.isLoading = false;
			this.users = users;
			this.temp = [...this.users];
		});
	}
}