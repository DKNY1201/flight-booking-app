import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Airport} from "../models/airport.model";
import {Utils} from "../shared/Utils";
import {ItemsResponse} from "../shared/ItemsResponse";
import {Itinerary} from "../models/itinerary.model";

@Injectable()
export class AirportService {
  airportSearchUrl = Utils.SERVER_AIRPORT_SEARCH_URL;
  itineraryFeatureUrl = Utils.SERVER_ITINERARY_FEATURE_URL;

  constructor(private httpClient: HttpClient) {}

  search(term: string): Observable<Airport[]> {
    return this.httpClient.get<ItemsResponse>(`${this.airportSearchUrl}/${term}`)
      .map(response => response.data as Airport[]);
  }

  getFeatureItineraries() {
    return this.httpClient.get<ItemsResponse>(this.itineraryFeatureUrl)
      .map(response => response.data as Itinerary[]);
  }
}
