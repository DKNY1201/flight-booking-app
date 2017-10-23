import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {Utils} from "../shared/Utils";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {
  userUrl = Utils.SERVER_USER_URL;
  checkEmailUrl = Utils.SERVER_CHECK_EMAIL_URL;

  constructor(private httpClient: HttpClient) {}

  signup(user: User) {
    return this.httpClient.post(this.userUrl, user);
  }

  checkEmail(email: string): Observable<any> {
    return this.httpClient.get(`${this.checkEmailUrl}/${email}`);
  }
}
