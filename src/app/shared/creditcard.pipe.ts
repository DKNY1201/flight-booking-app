import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'creditcard'
})
export class CreditCard implements PipeTransform {
  transform(value: string) {
    if (!value) {
      return value;
    }

    return value.replace(/\d(?=\d{4})/g, "*");
  }
}
