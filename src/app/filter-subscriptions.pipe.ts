import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSubscriptions'
})
export class FilterSubscriptionsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log("Filter",value)
    var filteredSubscriptions = value.filter()
    return value;
  }

}
