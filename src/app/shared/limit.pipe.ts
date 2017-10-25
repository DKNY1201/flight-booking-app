import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {
  transform(value: string, limit?: number) {
    if (!value) {
      return value;
    }

    limit = limit ? limit : 50;

    return value.substr(0, limit) + ((value.length > limit) ? '...' : '');
  }
}
