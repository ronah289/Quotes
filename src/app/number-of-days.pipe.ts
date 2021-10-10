import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberOfDays'
})
export class NumberOfDaysPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date();
    let todayWithNoTime: any = new Date(today.getDate(), today.getMonth(), today.getFullYear())
    var dateDifference = Math.abs(todayWithNoTime - value)
    const secondsInADay = 86400;

    var dateDifferenceSeconds = dateDifference * 0.001;
    var dateCounter = dateDifferenceSeconds / secondsInADay;

    if (dateCounter >= 1 && todayWithNoTime < value) {
      return dateCounter;
    } else {
      return 0;
    }

  }

}
