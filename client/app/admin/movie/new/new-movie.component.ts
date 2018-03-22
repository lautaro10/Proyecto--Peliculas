// Libraries
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as lodash from 'lodash';

// Models
import { Movie } from '../../../_models/index';

// Services
import { MovieService } from '../../../_services/index';

@Component({
	moduleId: module.id.replace("/dist/", "/app/"),
	templateUrl: 'new-movie.component.html',
	styleUrls: ['new-movie.component.css']
})
export class NewMovieComponent {
	// Public properties
	/**
	 * Movie to search in the api
	 */
	movieName:string;
	/**
	 * Movies to add
	 */
	searchMovies: any[] = [];
	/**
	 * Toggle to check if search movies has finished
	 */
	isLoading = false;

	/**
   * Creates a new `NewMovieComponent` instance.
   */
	constructor (
		private movieService: MovieService,
		private toastr: ToastrService,
		private router: Router
	) {}

	/**
	 * Add movie
	 * @param movie Current movie
	 */
	saveMovie(movie: any) {
		this.isLoading = true;
		this.movieService.create(movie)
		.subscribe(
			data => {
				this.toastr.success('Pelicula guardada con exito!');
				this.router.navigate(['/peliculas']);
				this.isLoading = false;
			},
			error => {
				this.isLoading = false;
				this.toastr.error(error);
			}
		);
	}

	/**
	 * Search movie from the api
	 * @param term term to search
	 */
  searchMovie(term: string): void {
		if (term) {
			this.isLoading = true;
			this.movieService.searchMovie(term).subscribe(res => {
				if (res.results.length > 0) {
					this.isLoading = false;
					const movies = res.results;
					this.firstThreeMovies(movies);
				} else {
					this.isLoading = false;
					this.toastr.error('No se encontro ninguna película con ese nombre')
				}
			});
		}
	}

	// Private methods
	/**
	 * Only show three movies to add
	 * @param movies 
	 */
	private firstThreeMovies(movies: any[]) {
		this.searchMovies = [];
		let i=0;
		while (i<3 && i<movies.length) {
			this.searchMovies.push(movies[i]);
			i++;
		}
	}
}
