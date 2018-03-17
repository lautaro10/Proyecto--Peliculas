import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ToastrService } from 'ngx-toastr';
import * as lodash from 'lodash';

@Component({
    moduleId: module.id.replace("/dist/", "/app/"),
    templateUrl: 'users.component.html'
})

export class UsersComponent implements OnInit {
	users: User[] = [];
	isLoading = false;
	@ViewChild(DatatableComponent) table: DatatableComponent;
	selected: any = [];
	temp: any = [];
	messages = {
		emptyMessage: "No se encontraron usuarios"
	}

	constructor (
		private userService: UserService,
		private toastrService: ToastrService
	) {}

	ngOnInit() {
		this.loadAllUsers();
	}
	
  onSelect({ selected }: any) {
    this.selected.splice(0, this.selected.length);
		this.selected.push(...selected);
	}

	checkSelectable(event: any) {
		const currentUser = JSON.parse(localStorage.getItem('_login_provider'));
		return currentUser.username !== event.username;
  }

	removeUsers() {
		this.userService.delete(this.selected[0]._id).subscribe(() => {
			this.toastrService.success('Usuario eliminado correctamente');
			this.loadAllUsers();
		});
	}

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

	private loadAllUsers() {
		this.isLoading = true;
		this.userService.getAll().subscribe(users => {
			this.isLoading = false;
			this.users = users;
			this.temp = [...this.users];
		});
	}
}