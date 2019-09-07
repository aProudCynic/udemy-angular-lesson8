import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const separatedValue: string[] = value.split('');
    const reversedValueAsArray: string[] = separatedValue.reverse();
    const result = reversedValueAsArray.join('');
    console.log(result);
    return result;
  }

}
