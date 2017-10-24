import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Airport} from "../models/airport.model";
import {Utils} from "../shared/Utils";
import {ItemsResponse} from "../shared/ItemsResponse";

@Injectable()
export class AirportService {
  airportSearchUrl = Utils.SERVER_AIRPORT_SEARCH_URL;

  constructor(private httpClient: HttpClient) {}

  search(term: string): Observable<Airport[]> {
    return this.httpClient.get<ItemsResponse>(`${this.airportSearchUrl}/${term}`)
      .map(response => response.data as Airport[]);
  }
}
