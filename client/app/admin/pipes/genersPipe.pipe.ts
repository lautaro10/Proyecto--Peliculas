// Libraries
import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'genrePipe',
  pure: false
})
export class GenrePipe implements PipeTransform {
  transform(id: number): string {
    switch (id) {
      case 28:
        return 'Accion';
      case 12:
        return 'Adventura';
      case 16:
				return 'Animacion';
			case 35:
				return 'Comedia';
			case 80:
				return 'Crimen';
			case 99:
				return 'Documental';
			case 18:
				return 'Drama';
			case 10751:
				return 'Familia';
			case 14:
				return 'Fantasía';
			case 36:
				return 'Fantasía';
			case 27:
				return 'Terror';
			case 10402:
				return 'Musical';
			case 9648:
				return 'Misterio';
			case 10749:
				return 'Romance';
			case 878:
				return 'Ciencia Ficción';
			case 10770:
				return 'TV Movie';
			case 53:
				return 'Thiller';
			case 10752:
				return 'War';
			case 37:
      	return 'Western';
      default:
        return '';
    }
  }
}