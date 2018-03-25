// Libraries
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  PreloadAllModules
} from '@angular/router';

/**
 * Routes for app module.
 */
const MAIN_ROUTES: Routes = [
];

/**
 * `AppRoutingModule` defines the main routes.
 */
@NgModule({
  imports: [
    RouterModule.forRoot(MAIN_ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }

/**
 * Routing components.
 */
export const routingComponents: any = [];
