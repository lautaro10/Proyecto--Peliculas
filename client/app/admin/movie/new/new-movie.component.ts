import { Component } from '@angular/core';
import { MovieService } from '../../../_services/index';
import { Movie } from '../../../_models/index';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as lodash from 'lodash';

@Component({
	moduleId: module.id.replace("/dist/", "/app/"),
	templateUrl: 'new-movie.component.html',
	styleUrls: ['new-movie.component.css']
})
export class NewMovieComponent {
	movieName:string;
	searchMovies: any[] = [];
	isLoading = false;

	constructor (
		private movieService: MovieService,
		private toastr: ToastrService,
		private router: Router
	) {}

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

  searchMovie(term: string): void {
		if (term) {
			this.movieService.searchMovie(term).subscribe(res => {
				if (res.results.length > 0) {
					const movies = res.results;
					this.firstThreeMovies(movies);
				} else {
					this.toastr.error('No se encontro ninguna película con ese nombre')
				}
			});
		}
	}

	private firstThreeMovies(movies: any[]) {
		this.searchMovies = [];
		let i=0;
		while (i<3 && i<movies.length) {
			this.searchMovies.push(movies[i]);
			i++;
		}
	}
}
