// Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// Routing
import {
  UsersRoutingModule,
  routingComponents
} from './users.routing';

/**
 * `UsersModule` defines a module manage users.
 */
@NgModule({
  imports: [
		UsersRoutingModule,
		CommonModule,
		NgxDatatableModule
  ],
  declarations: [
    routingComponents,
  ],
  exports: [
  ]
})
export class UsersModule {}