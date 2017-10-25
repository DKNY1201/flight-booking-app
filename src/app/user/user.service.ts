import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Utils} from "../shared/Utils";
import {ItemsResponse} from "../shared/ItemsResponse";

interface ItemsLoginResponse {
  token: string;
  userId: string;
  username: string;
}

@Injectable()
export class UserService {
  profileUrl = Utils.SERVER_PROFILE_URL;
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) {
  }

  getProfile() {
    return this.httpClient.get<ItemsResponse>(this.profileUrl)
      .map(response => response.data);
  }

  editProfile(firstName: string, lastName: string, gender: number,
              dayOfBirth: number, monthOfBirth: number, yearOfBirth: number) {
    const dataToUpdate = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      dayOfBirth: dayOfBirth,
      monthOfBirth: monthOfBirth,
      yearOfBirth: yearOfBirth
    };

    return this.httpClient.post<ItemsLoginResponse>(this.profileUrl, dataToUpdate, {headers: this.headers});
  }
}
