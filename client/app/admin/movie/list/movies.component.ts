// Libraries
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import * as lodash from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

// Services
import { LoggedService } from '../../../_services/logged.service';
import { MovieService } from '../../../_services/index';

// Models
import { Movie } from '../../../_models/index';

@Component({
	moduleId: module.id.replace("/dist/", "/app/"),
	templateUrl: 'movies.component.html',
	styleUrls: ['movies.component.css']
})
export class MoviesComponent implements OnInit {
	// Public properties
	/**
	 * Current table to movies show
	 */
	@ViewChild(DatatableComponent) table: DatatableComponent;
	/**
	 * Movies list
	 */
	movies: Movie[] = [];
	/**
	 * Toggle to check if movies has charged
	 */
	isLoading = false;
	/**
	 * Movies selected
	 */
	selected: any = [];
	/**
	 * Toggle to check if user is admin or not
	 */
	isAdmin = false;
	/**
	 * Current messages error
	 */
	messages = {
		emptyMessage: "No se encontraron películas"
	}

	// Private methods
	temp: any = [];

	/**
   * Creates a new `MoviesComponent` instance.
   */
	constructor (
		private movieService: MovieService,
		private toastrService: ToastrService,
		private router: Router,
		private userLogged: LoggedService
	) {
		this.isAdmin = userLogged.isAdmin;
	}

	// Public methods
	/**
	 * Implements on init method
	 */
	ngOnInit() {
		this.loadAllmovies();
	}

	/**
	 * Delete movie selected
	 */
	removeMovie() {
		this.movieService.delete(this.selected[0]._id).subscribe(() => {
			this.loadAllmovies();
			this.toastrService.success('Pelicula eliminada correctamente');
		});
		this.selected = [];
	}

	/**
	 * Movies selected
	 */
  onSelect({ selected }: any) {
    this.selected.splice(0, this.selected.length);
		this.selected.push(...selected);
	}

	/**
	 * Redirect to movie show
	 */
	showMovie() {
		this.router.navigate(['peliculas', this.selected[0]._id]);
	}

	/**
	 * Search movie
	 */
	updateFilter(event: any) {
    const val = event.target.value.toLowerCase();
		// filter our data
    const temp = this.temp.filter(function(d: any) {
      return d.title.toLowerCase().indexOf(val) !== -1 || !val;
		});
    // update the rows
    this.movies = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
	}
	
	// Private methods
	/**
	 * Charge movies
	 */
	private loadAllmovies() {
		this.isLoading = true;
		this.movieService.getAll().subscribe(movies => {
			this.isLoading = false;
			this.movies = movies
			this.temp = [...this.movies];
		});
	}
}