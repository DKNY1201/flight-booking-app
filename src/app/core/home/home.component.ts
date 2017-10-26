import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {AirportService} from "../airport.service";
import {Airport} from "../../models/airport.model";
import {Itinerary} from "../../models/itinerary.model";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  showTooltip = false;
  featureItineraries: Itinerary[];

  subscription: Subscription;

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

  constructor(private airportService: AirportService, private router: Router) { }

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

    this.subscription = this.airportService.getFeatureItineraries()
      .subscribe(
        itineraries => {
          for (const itinerary of itineraries) {
            let price = 0;
            for (const flight of itinerary.flights) {
              price += flight.price;
            }
            itinerary.price = price;
          }
          this.featureItineraries = itineraries;
        },
          error => console.log(error)
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
    this.router.navigate(['/search'], {queryParams: {
      leavingAirportIata: this.leavingAirportIata,
      goingAirportIata: this.goingAirportIata,
      leavingDate: leavingDate,
      passenger: passenger
    }});
  }

  onSelectItinerary(featureItinerary: Itinerary) {
    this.leavingAirportIata = featureItinerary.leavingAirportIata;
    this.leavingAirportVal = featureItinerary.leavingAirportIata;
    this.goingAirportIata = featureItinerary.goingAirportIata;
    this.goingAirportVal = featureItinerary.goingAirportIata;
  }
}
