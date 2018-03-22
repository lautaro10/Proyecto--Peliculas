// Libraries
import { Injectable } from '@angular/core';
import {
	Http,
	Headers,
	RequestOptions,
	Response
} from '@angular/http';

// Models
import { User } from '../_models/index';

@Injectable()
export class UserService {

	/**
	 * Create a new UserService instance
	 * @param http Http
	 */
	constructor(private http: Http) { }

	getAll() {
		return this.http.get('/users').map((response: Response) => response.json());
	}

	getById(_id: string) {
		return this.http.get('/users/' + _id).map((response: Response) => response.json());
	}

	create(user: User) {
		return this.http.post('/users/register', user);
	}

	update(user: User) {
		return this.http.put('/users/' + user._id, user);
	}

	delete(_id: string) {
		return this.http.delete('/users/' + _id);
	}
}