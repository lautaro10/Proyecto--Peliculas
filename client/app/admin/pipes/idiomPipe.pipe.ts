// Libraries
import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'idiomPipe',
  pure: false
})
export class IdiomPipe implements PipeTransform {
  transform(id: string): string {
    switch (id) {
      case 'en':
        return 'Inglés';
      case 'es':
        return 'Español';
      case 'ger':
				return 'Alemán';
			case 'fr':
				return 'Francés';
			case 'it':
				return 'Italiano';
      default:
        return 'Inglés';
    }
  }
}