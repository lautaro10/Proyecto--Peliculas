// Libraries
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

// Components
import { LoginComponent } from './login/login.component';

/**
 * Routes for public module.
 */
const PUBLIC_ROUTES: Routes = [
  {
		path: 'login',
		pathMatch: 'full',
		component: LoginComponent,
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'login'
  },
];

/**
 * `PublicRoutingModule` defines the routes of the public module.
 */
@NgModule({
  imports: [
    RouterModule.forChild(PUBLIC_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class PublicRoutingModule { }

/**
 * Routing components.
 */
export const routingComponents = [
  LoginComponent
];