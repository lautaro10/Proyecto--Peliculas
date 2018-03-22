// Libraries
import {
	Component,
	OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

// Models
import { Movie } from '../../../_models/index';

// Services
import { LoggedService } from '../../../_services/logged.service';
import { MovieService } from '../../../_services/index';

@Component({
    moduleId: module.id.replace("/dist/", "/app/"),
		templateUrl: 'movie.component.html',
		styleUrls: ['movie.component.css']
})
export class MovieComponent implements OnInit {
	// Public properties
	/**
	 * Movies recomendations
	 */
	recomendations: any[];
	/**
	 * Current movie
	 */
	movie: Movie;
	/**
	 * Toggle to check if user is admin or not
	 */
	isAdmin = false;

	// Private properties
	/**
	 * Subcription params
	 */
	private sub: any;

	/**
   * Creates a new `MovieComponent` instance.
   */
	constructor (
		private route: ActivatedRoute,
		private movieService: MovieService,
		private toastr: ToastrService,
		private router: Router,
		private userLogged: LoggedService
	) {
		this.isAdmin = userLogged.isAdmin;
	}

	// Public properties
	/**
	 * Implements on init method
	 */
	ngOnInit(): void {
    // Get position from backend
    this.sub = this.route.params.subscribe(params => {
      // (+) converts string 'id' to a number
			const id = params['id'];
      // Load movie
      this.loadMovie(id);
    });
	}

	/**
	 * Redirect to see movie trailer
	 * @param title Title movie
	 */
	viewTrailer(title: string){
		window.open("https://www.youtube.com/results?search_query=trailer+" + title, "_blank");
	}

	/**
	 * Save movie form recomendations list
	 * @param movie Current movie
	 */
	saveMovie(movie: Movie) {
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
	
	// Private methods
	/**
	 * Load movie
	 * @param id Movie id
	 */
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

	/**
	 * Load recomendations
	 * @param title Title movie 
	 */
	private loadRecomendations(title: string) {
		this.movieService.searchMovie(title).subscribe(res => {
			if (res.results.length > 0) {
				const movies = res.results;
				this.firstThreeMovies(movies);
			} else {
				this.toastr.error('No se encontro ninguna película con ese nombre')
			}
		});
	}

	/**
	 * Only show three recomendations
	 * @param movies Movies list
	 */
	private firstThreeMovies(movies: any[]) {
		this.recomendations = [];
		let i=1;
		while (i<4 && i<movies.length) {
			this.recomendations.push(movies[i]);
			i++;
		}
	}
}