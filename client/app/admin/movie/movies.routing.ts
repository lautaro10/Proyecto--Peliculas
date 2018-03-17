// Libraries
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

// Components
import { MoviesComponent } from './list/movies.component';
import { NewMovieComponent } from './new/new-movie.component';
import { MovieComponent } from './show/movie.component';

/**
 * Routes for Movies module.
 */
const MOVIES_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MoviesComponent
	},
  {
    path: 'nueva',
    pathMatch: 'full',
    component: NewMovieComponent
	},
  {
    path: ':id',
    component: MovieComponent,
  }
];

/**
 * `MoviesRoutingModule` defines the routes of the Movies module.
 */
@NgModule({
  imports: [
    RouterModule.forChild(MOVIES_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule { }

/**
 * Routing components.
 */
export const routingComponents = [
	MoviesComponent,
	NewMovieComponent,
	MovieComponent
];