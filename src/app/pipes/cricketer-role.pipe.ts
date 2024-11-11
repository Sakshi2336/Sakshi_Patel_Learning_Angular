import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cricketerRole',
  standalone: true
})
export class CricketerRolePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'All-Rounder':
        return 'allRounder-color'; // Class for Captain (Red)
      case 'Batsman':
        return 'batsman-color'; // Class for Batsman (Blue)
      case 'Bowler':
        return 'bowler-color'; // Class for Bowler (Green)
      default:
        return 'default-color'; // Default color for other roles
    }
  }

}
