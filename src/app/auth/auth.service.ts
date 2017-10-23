import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {Utils} from "../shared/Utils";

@Injectable()
export class AuthService {
  userUrl = Utils.SERVER_USER_URL;

  constructor(private httpClient: HttpClient) {}

  signup(user: User) {
    return this.httpClient.post(this.userUrl, user);
  }
}
