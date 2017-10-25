import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Utils} from "../shared/Utils";
import {ItemsResponse} from "../shared/ItemsResponse";
import {Observable} from "rxjs/Observable";
import { Itinerary } from '../models/itinerary.model';

@Injectable()
export class SearchService {
  itineraryUrl = Utils.SERVER_ITINERARY_URL;
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
  
  getItinerary(id: string): Observable<Itinerary> {
      const url = `${this.itineraryUrl}/${id}`;
      return this.httpClient.get<Itinerary>(url);
  }
}
