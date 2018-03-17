// Libraries
import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';

// Routing
import {
  PublicRoutingModule,
  routingComponents
} from './public.routing';

/**
 * `PublicModule` defines a public module that any user can be accessed.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PublicRoutingModule
  ],
  declarations: [
    routingComponents
  ]
})
export class PublicModule {}