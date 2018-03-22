// Libraries
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'angular2-social-login';

// Services
import { LoggedService } from '../../../_services/logged.service';
import { AuthenticationService } from '../../../_services/index';

/**
 * `NavbarComponent`
 */
@Component({
	moduleId: module.id.replace("/dist/", "/app/"),
	selector: 'navbar-component',
	templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
	// Public properties
	/**
	 * Toggle to check if user is admin or not
	 */
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
	
	// Public methods
	/**
	 * Logout social login
	 */
	logoutSocialLogin(){
		this._auth.logout().subscribe(
			(data: any)=>{
				this.router.navigate(['/login']);
			}
		)
	}

	/**
	 * Logout admin
	 */
	logout() {
		this.authenticationService.logout();
		this.router.navigate(['/login']);
	}
}
