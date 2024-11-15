import { Pipe, PipeTransform } from '@angular/core';
import {Cricketer} from "../Shared/Modules/cricketer";

@Pipe({
  name: 'cricketerNameAge',
  standalone: true
})
export class CricketerNameAgePipe implements PipeTransform {

  transform(cricketer:Cricketer): unknown {
    return `${cricketer.firstName} (${cricketer.age})`;
  }

}
