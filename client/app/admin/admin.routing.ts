// Libraries
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { AuthGuard, AuthGuardSocialLogin } from '../_guards/index';

// Components
import { AdminComponent } from './admin.component';
import { NoContentComponent } from './no-content.component';

/**
 * Routes for admin module.
 */
const ADMIN_ROUTES: Routes = [
  {
		path: '',
    component: AdminComponent,
    children: [
      {
				canActivate: [AuthGuard],
				path: 'usuarios',
        loadChildren: 'app/admin/user/users.module#UsersModule'
      },
      {
				canActivate: [AuthGuardSocialLogin],
        path: 'peliculas',
        loadChildren: 'app/admin/movie/movies.module#MoviesModule'
			},
			{ path: '**',  component: NoContentComponent }
    ]
  }
];

/**
 * `AdminRoutingModule` defines the routes of the admin module.
 */
@NgModule({
  imports: [
    RouterModule.forChild(ADMIN_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }

/**
 * Routing components.
 */
export const routingComponents = [
	AdminComponent,
	NoContentComponent
];