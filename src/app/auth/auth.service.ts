import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user.model";
import {Utils} from "../shared/Utils";
import {Observable} from "rxjs/Observable";

interface ItemsLoginResponse {
  token: string;
  userId: string;
}

@Injectable()
export class AuthService {
  userUrl = Utils.SERVER_USER_URL;
  checkEmailUrl = Utils.SERVER_CHECK_EMAIL_URL;
  userSigninUrl = Utils.SERVER_USER_SIGNIN_URL;

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) {}

  signup(user: User) {
    return this.httpClient.post(this.userUrl, user, {headers: this.headers});
  }

  checkEmail(email: string): Observable<any> {
    return this.httpClient.get(`${this.checkEmailUrl}/${email}`);
  }

  signin(email: string, password: string) {
    const credential = {
      email: email,
      password: password
    };
    return this.httpClient.post<ItemsLoginResponse>(this.userSigninUrl, credential, {headers: this.headers});
  }

  isAuthenticated() {
    return localStorage.getItem('token') != null;
  }

  logout() {
    localStorage.clear();
  }
}
