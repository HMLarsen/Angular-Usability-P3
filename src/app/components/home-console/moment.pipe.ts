import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentDatePipe',
  pure: false
})
export class MomentDatePipe implements PipeTransform {

  transform(value: Date, dateFormat: string): any {
    return moment(value).format(dateFormat);
  }

}
