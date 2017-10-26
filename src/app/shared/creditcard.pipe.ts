import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'creditcard'
})
export class CreditCardPipe implements PipeTransform {
  transform(value: string) {
    if (!value) {
      return value;
    }
    var separator = value.lastIndexOf('-');
    return "************" + value.substring(separator + 1, value.length);
  }
}
