import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>, ...args: any[]): any {
    return value.sort((server1, server2) => {
      if (server1.name > server2.name) {
        return 1;
      } else if (server1.name < server2.name) {
        return -1;
      } else {
        return 0;
      }
    });
  }

}
