import {HttpClient} from "@angular/common/http";

import 'rxjs/Rx';

export class Utils {
  constructor(private httpClient: HttpClient) {}

  static SERVER_URL = 'http://localhost:3000';
  static SERVER_USER_URL = Utils.SERVER_URL + '/users';
  static SERVER_USER_SIGNIN_URL = Utils.SERVER_USER_URL + '/signin';
  static SERVER_CHECK_EMAIL_URL = Utils.SERVER_USER_URL + '/checkemail';

  static DAYS = Array(31).fill(0).map((x, i) => i + 1);
  static MONTHS = Array(12).fill(0).map((x, i) => i + 1);
  static get YEARS() {
    const startYear = 1920;
    const endYear = 2000;
    const years = [];
    for (let i = endYear; i >= startYear; --i) {
      years.push(i);
    }

    return years;
  }
}
