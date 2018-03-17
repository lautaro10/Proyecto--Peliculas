// Libraries
import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'popularityPipe',
  pure: false
})
export class PopularityPipe implements PipeTransform {
  transform(id: number): string {
		if (id < 10) {
			return 'Baja'
		} else if (id < 20) {
			return 'Media'
		} else {
			return 'Alta'
		}
	}
}