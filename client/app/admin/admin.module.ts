// Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routing
import {
  AdminRoutingModule,
  routingComponents
} from './admin.routing';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoContentComponent } from './no-content.component';

/**
 * `AdminModule` defines a private module that can only be accessed when logged in.
 */
@NgModule({
  imports: [
		AdminRoutingModule,
		CommonModule
  ],
  declarations: [
		routingComponents,
		NavbarComponent,
		NoContentComponent
  ],
})
export class AdminModule {}