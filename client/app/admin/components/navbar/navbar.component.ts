// Libraries
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'angular2-social-login';
import { AuthenticationService } from '../../../_services/index';
import { LoggedService } from '../../../_services/logged.service';

/**
 * `NavbarComponent`
 */
@Component({
	moduleId: module.id.replace("/dist/", "/app/"),
	selector: 'navbar-component',
	templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
	isMovieSelected = false;
	isAdmin = false;
  /**
   * Creates a new `NavbarComponent` instance.
   */
  constructor(
		private router: Router,
		private authenticationService: AuthenticationService,
		private _auth: AuthService,
		private userLogged: LoggedService
	) {
		this.isAdmin = userLogged.isAdmin;
	}
	
	logoutFace(){
		this._auth.logout().subscribe(
			(data: any)=>{
				this.router.navigate(['/login']);
			}
		)
	}

	logout() {
		this.authenticationService.logout();
		this.router.navigate(['/login']);
	}
}
