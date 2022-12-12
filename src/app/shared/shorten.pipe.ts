import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(text: string): string {
    if (text.length > 300) {
      const end = text.slice(0, 300).lastIndexOf('.');
      return text.slice(0, end + 1);
    }
    return text;
  }

}
