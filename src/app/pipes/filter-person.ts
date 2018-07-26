import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPerson',
  pure : false
})
export class FilterPerson implements PipeTransform {

  /**
   * Transforms filter pipe
   * @param items
   * @param filter
   * @returns transform
   */
  transform(items: any[], filter: string): any[] {
    if (!items) {
        return [];
    }
    return items.filter( it => {
      return (
        it.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1 ||
        it.surname.toUpperCase().indexOf(filter.toUpperCase()) !== -1 ||
        it.surname2.toUpperCase().indexOf(filter.toUpperCase()) !== -1 ||
        it.datebirthday.toUpperCase().indexOf(filter.toUpperCase()) !== -1 ||
        it.phone.toUpperCase().indexOf(filter.toUpperCase()) !== -1 ||
        it.sex.toUpperCase().indexOf(filter.toUpperCase()) !== -1 ||
        it.country.toUpperCase().indexOf(filter.toUpperCase()) !== -1 ||
        it.lastModification.toUpperCase().indexOf(filter.toUpperCase()) !== -1
      );
    });

   }
}
