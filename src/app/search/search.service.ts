import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Utils} from "../shared/Utils";
import {ItemsResponse} from "../shared/ItemsResponse";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SearchService {
  itinerarySearchUrl = Utils.SERVER_ITINERARY_SEARCH_URL;

  constructor(private httpClient: HttpClient) {
  }

  searchItinareries(leavingAirportIata: string,
                    goingAirportIata: string,
                    leavingDate: string,
                    passenger: number) {
    const url = `${this.itinerarySearchUrl}?leavingAirportIata=${leavingAirportIata}` +
                `&goingAirportIata=${goingAirportIata}&leavingDate=${leavingDate}&passenger=${passenger}`;
    return this.httpClient.get<ItemsResponse>(url)
      .map(response => response.data)
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
