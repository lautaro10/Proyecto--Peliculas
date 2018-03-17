import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../../../_services/index';
import { Movie } from '../../../_models/index';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import * as lodash from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoggedService } from '../../../_services/logged.service';

@Component({
	moduleId: module.id.replace("/dist/", "/app/"),
	templateUrl: 'movies.component.html',
	styleUrls: ['movies.component.css']
})
export class MoviesComponent implements OnInit {
	@ViewChild(DatatableComponent) table: DatatableComponent;
	movies: Movie[] = [];
	isLoading = false;
	selected: any = [];
	temp: any = [];
	isAdmin = false;
	messages = {
		emptyMessage: "No se encontraron películas"
	}

	constructor (
		private movieService: MovieService,
		private toastrService: ToastrService,
		private router: Router,
		private userLogged: LoggedService
	) {
		this.isAdmin = userLogged.isAdmin;
	}

	ngOnInit() {
		this.loadAllmovies();
	}

	onActivate(event: any) {
  }

	removeMovie() {
		this.movieService.delete(this.selected[0]._id).subscribe(() => {
			this.loadAllmovies();
			this.toastrService.success('Pelicula eliminada correctamente');
		});
		this.selected = [];
	}

  onSelect({ selected }: any) {
    this.selected.splice(0, this.selected.length);
		this.selected.push(...selected);
	}

	showMovie() {
		this.router.navigate(['peliculas', this.selected[0]._id]);
	}

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
	
	private loadAllmovies() {
		this.isLoading = true;
		this.movieService.getAll().subscribe(movies => {
			this.isLoading = false;
			this.movies = movies
			this.temp = [...this.movies];
		});
	}
}