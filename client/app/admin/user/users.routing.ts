// Libraries
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

// Components
import { UsersComponent } from './list/users.component';
import { UserComponent } from './show/user.component';

/**
 * Routes for users module.
 */
const USERS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UsersComponent,
  },
  {
		path: ':id',
		pathMatch: 'full',
    component: UserComponent,
  }
];

/**
 * `UsersRoutingModule` defines the routes of the users module.
 */
@NgModule({
  imports: [
    RouterModule.forChild(USERS_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }

/**
 * Routing components.
 */
export const routingComponents = [
  UsersComponent,
  UserComponent,
];