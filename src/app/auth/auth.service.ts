import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";

@Injectable()
export class AuthService {
  userUrl = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {}

  signup(user: User) {
    return this.httpClient.post(this.userUrl, user);
  }
}
