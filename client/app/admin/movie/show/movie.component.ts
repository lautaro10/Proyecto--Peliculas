import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../_services/index';
import { ToastrService } from 'ngx-toastr';
import { Movie } from '../../../_models/index';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id.replace("/dist/", "/app/"),
		templateUrl: 'movie.component.html',
		styleUrls: ['movie.component.css']
})
export class MovieComponent implements OnInit {
	recomendations: any[];
	movie: Movie;
	private sub: any;

	constructor (
		private route: ActivatedRoute,
		private movieService: MovieService,
		private toastr: ToastrService,
		private router: Router,
	) {
	}

	ngOnInit(): void {
    // Get position from backend
    this.sub = this.route.params.subscribe(params => {
      // (+) converts string 'id' to a number
			const id = params['id'];
      // Load movie
      this.loadMovie(id);
    });
	}

	viewTrailer(title: string){
		window.open("https://www.youtube.com/results?search_query=trailer+" + title, "_blank");
	}

	saveMovie(movie: any) {
		this.movieService.create(movie)
		.subscribe(
			data => {
				this.toastr.success('Pelicula guardada con exito!');
				this.router.navigate(['/peliculas']);
			},
			error => {
				this.toastr.error(error);
			}
		);
	}
	
	private loadMovie(id: any) {
		this.movieService.getById(id)
		.subscribe(
			res => {
				this.movie = res;
				this.loadRecomendations(this.movie.title);
			},
			error => {
				// Show error
				this.toastr.error('No existe una película con ese identificador')
				// Redirect to peliculas
				this.router.navigate(['peliculas']);
			}
		)
	}

	private loadRecomendations(term: string) {
		this.movieService.searchMovie(term).subscribe(res => {
			if (res.results.length > 0) {
				const movies = res.results;
				this.firstThreeMovies(movies);
			} else {
				this.toastr.error('No se encontro ninguna película con ese nombre')
			}
		});
	}

	private firstThreeMovies(movies: any[]) {
		this.recomendations = [];
		let i=1;
		while (i<4 && i<movies.length) {
			this.recomendations.push(movies[i]);
			i++;
		}
	}
}