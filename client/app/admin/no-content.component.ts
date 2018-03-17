// Libraries
import { Component } from '@angular/core';

/**
 * `NoContentComponent` implements the not found view.
 */
@Component({
  template: `
    <div class="container text-center">
      <div class="row">
        <div class="col-md-12 page-404">
          <div class="number font-green"> 404 </div>
          <div class="details">
            <h3>Oops! Estas perdido.</h3>
            <p>No podemos encontrar la página que estás buscando.</p>
            <a routerLink="/peliculas">Ver películas</a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class NoContentComponent {
  /**
   * Creates a new NoContentComponent instance.
   */
  constructor() {}
}