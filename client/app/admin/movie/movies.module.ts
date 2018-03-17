// Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';

// Routing
import {
  MoviesRoutingModule,
  routingComponents
} from './movies.routing';
import { GenrePipe } from '../pipes/genersPipe.pipe';
import { IdiomPipe } from '../pipes/idiomPipe.pipe';
import { PopularityPipe } from '../pipes/popularityPipe.pipe';

/**
 * `MovieModule` defines a module manage Movie.
 */
@NgModule({
  imports: [
		MoviesRoutingModule,
		CommonModule,
		NgxDatatableModule,
		FormsModule
  ],
  declarations: [
		routingComponents,
		GenrePipe,
		IdiomPipe,
		PopularityPipe
  ],
  exports: [
  ]
})
export class MoviesModule {}