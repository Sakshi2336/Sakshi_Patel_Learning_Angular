import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cricketerStatus',
  standalone: true
})
export class CricketerStatusPipe implements PipeTransform {

  transform(value: boolean | undefined): string {
    if (value === true) {
      return 'active';
    } else{
      return 'inactive';
    }
  }

}
