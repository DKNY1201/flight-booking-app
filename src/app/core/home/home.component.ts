import { Component, OnInit } from '@angular/core';
import {AirportService} from "../airport.service";
import {Airport} from "../../models/airport.model";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  leavingAirports: Observable<Airport[]>;
  goingAirports: Observable<Airport[]>;

  leavingAirportVal: string;
  goingAirportVal: string;
  leavingAirportIata: string;
  goingAirportIata: string;

  showLeavingAirportList: boolean;
  showGoingAirportList: boolean;

  searchFlightForm: FormGroup;


  private leavingSearchTerms = new Subject<string>();
  private goingSearchTerms = new Subject<string>();

  constructor(private airportService: AirportService) { }

  ngOnInit() {
    this.showLeavingAirportList = false;
    this.showGoingAirportList = false;
    this.leavingAirports = this.leavingSearchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(
        term => term ? this.airportService.search(term) : Observable.of<Airport[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Airport[]>([]);
      });

    this.goingAirports = this.goingSearchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(
        term => term ? this.airportService.search(term) : Observable.of<Airport[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Airport[]>([]);
      });

      this.initForm();
  }

  initForm() {
    this.searchFlightForm = new FormGroup({
      'leavingAirport': new FormControl(null, Validators.required),
      'goingAirport': new FormControl(null, Validators.required),
      'leavingDate': new FormControl(null, Validators.required),
      // 'comeBackDate': new FormControl(null, Validators.required),
      'passenger': new FormControl(null, Validators.required)
    });
  }

  searchLeaving(term: string) {
    this.showLeavingAirportList = true;
    this.leavingSearchTerms.next(term);
  }

  searchGoing(term: string) {
    this.showGoingAirportList = true;
    this.goingSearchTerms.next(term);
  }

  onSelectLeavingAirport(airport: Airport) {
    this.leavingAirportVal = `${airport.name} [${airport.iata}]`;
    this.leavingAirportIata = airport.iata;
    this.showLeavingAirportList = false;
  }

  onSelectGoingAirport(airport: Airport) {
    this.goingAirportVal = `${airport.name} [${airport.iata}]`;
    this.goingAirportIata = airport.iata;
    this.showGoingAirportList = false;
  }

  searchFlights() {
    const leavingDate = this.searchFlightForm.get('leavingDate').value;
    const passenger = this.searchFlightForm.get('passenger').value;


  }

}
