import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Colorless': return 'star_rate_outline';
      case 'Darkness': return 'dark_mode_outline';
      case 'Dragon': return 'computer';
      case 'Fairy': return 'computer';
      case 'Fighting': return 'sports_mma';
      case 'Fire': return 'local_fire_department';
      case 'Grass': return 'spa';
      case 'Lightning': return 'bolt';
      case 'Metal': return 'hexagon';
      case 'Psychic': return 'visibility';
      case 'Water': return 'water_drop';
    }
    return 'code';
  }
}
