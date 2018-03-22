// Libraries
import { Component } from '@angular/core';

// Services
import { LoggedService } from '../_services/logged.service';

/**
 * `AdminComponent` implements the main view for admin module.
 */
@Component({
	moduleId: module.id.replace("/dist/", "/app/"),
  templateUrl: 'admin.component.html'
})
export class AdminComponent {
  /**
   * Creates a new `AdminComponent` instance.
   */
  constructor(
		private loggedService: LoggedService
  ) {
		loggedService.setAdmin();
	}
}
