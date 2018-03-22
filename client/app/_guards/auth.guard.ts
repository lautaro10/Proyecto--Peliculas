// Libraries
import { Injectable } from '@angular/core';

// Routes
import {
	Router,
	CanActivate,
	ActivatedRouteSnapshot, 
	RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

	/**
	 * Create AuthGuard instance
	 * @param router Router
	 */
	constructor(private router: Router) {}

	// Public methods
	/**
	 * Interfaz que una clase puede implementar para ser un guardia que decide si se puede activar una ruta.
	 * @param route ActivatedRouteSnapshot route
	 * @param state Current state
	 */
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		let _login_provider = localStorage.getItem('_login_provider');
		if (_login_provider !== 'facebook') {
			// logged in so return true
			return true;
		}

		// Not logged in so redirect to login page with the return url
		this.router.navigate(['/peliculas']);
		return false;
	}
}

@Injectable()
export class AuthGuardSocialLogin implements CanActivate {

	/**
	 * Create AuthGuard instance
	 */
	constructor(private router: Router) { }

	// Public methods
	/**
	 * Interfaz que una clase puede implementar para ser un guardia que decide si se puede activar una ruta.
	 * @param route ActivatedRouteSnapshot route
	 * @param state Current state
	 */
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		let _login_provider = localStorage.getItem('_login_provider');
		if (_login_provider) {
			// logged in so return true
			return true;
		}

		// not logged in so redirect to login page with the return url
		this.router.navigate(['/peliculas']);
		return false;
	}
}