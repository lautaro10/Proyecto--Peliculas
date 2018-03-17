import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Movie } from '../_models/index';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {
	private apiKey = '3fc8dba6ae880d1320d5869f0292c276';
	constructor(private http: Http) { }

	getAll() {
		return this.http.get('/movies').map((response: Response) => response.json());
	}

	getById(_id: string) {
		return this.http.get('/movies/' + _id).map((response: Response) => response.json());
	}

	create(movie: Movie) {
		return this.http.post('/movies/register', movie);
	}

	update(movie: Movie) {
		return this.http.put('/movies/' + movie._id, movie);
	}

	delete(_id: string) {
		return this.http.delete('/movies/' + _id);
	}

	searchMovie(searchMovie: string) {         
	const url: string = 'https://api.themoviedb.org/3/search/movie?api_key='+ this.apiKey +'&query=' + searchMovie + '&page=1&language=es&append_to_response=images';
	return this.http.get(url, {body: true})
		.map(result => result.json());
	}
}