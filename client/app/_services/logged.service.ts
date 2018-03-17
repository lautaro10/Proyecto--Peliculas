import { Injectable } from '@angular/core';

@Injectable()
export class LoggedService {

	isAdmin = false;

	 setAdmin() {
		const userLogged = localStorage.getItem('_login_provider');
		this.isAdmin = (userLogged === 'facebook') ? false : true;
	 }
}