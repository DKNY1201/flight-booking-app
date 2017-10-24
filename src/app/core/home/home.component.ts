import { Component, OnInit } from '@angular/core';
import {AirportService} from "../airport.service";
import {Airport} from "../../models/airport.model";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  leavingAirports: Observable<Airport[]>;
  goingAirports: Observable<Airport[]>;

  private leavingSearchTerms = new Subject<string>();

  constructor(private airportService: AirportService) { }

  ngOnInit() {
    this.leavingAirports = this.leavingSearchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(
        term => term ? this.airportService.search(term) : Observable.of<Airport[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Airport[]>([]);
      });
  }

  search(term: string) {
    this.leavingSearchTerms.next(term);
  }

  onSelectAirport(airport: Airport) {

  }

}
