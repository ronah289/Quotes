import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberOfDays'
})
export class NumberOfDaysPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
