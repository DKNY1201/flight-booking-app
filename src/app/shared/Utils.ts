import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";

import 'rxjs/Rx';

import 'rxjs/add/operator/do';
import {HttpClient} from "@angular/common/http";

export class Utils {

  constructor(private httpClient: HttpClient) {}

  static SERVER_URL = 'http://localhost:3000';
  static SERVER_USER_URL = Utils.SERVER_URL + '/users';

  static validateUniqueEmail(control: FormControl): Observable<any> | Promise<any> {
    if (control.value === "P123") {
      return Observable.of({uniqueProductID: true});
    } else {
      return Observable.of(null);
    }
  }
}
