import {Component, OnInit} from '@angular/core';
import {SearchService} from "./search.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import { Location } from '@angular/common';

import {Itinerary} from "../models/itinerary.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  itineraries: Itinerary[];

  constructor(private searchService: SearchService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) {
  }

  ngOnInit() {
    this.route.queryParams
      .switchMap((params: Params) => {
        const leavingAirportIata = params['leavingAirportIata'];
        const goingAirportIata = params['goingAirportIata'];
        const leavingDate = params['leavingDate'];
        const passenger = +params['passenger'];
        return this.searchService.searchItinareries(leavingAirportIata, goingAirportIata, leavingDate, passenger);
      })
      .subscribe(
        itineraries => {
          this.itineraries = itineraries;
          for (const itinerary of itineraries) {
            let price = 0;
            for (const flight of itinerary.flights) {
              price += flight.price;
            }
            itinerary.price = price;
          }
        },
        error => console.error(error)
      );
  }

  onSelectItinerary(itinerary) {
    this.router.navigate(['/booking/' + itinerary._id]);
  }

  goBack(): void {
      this.location.back();
  }
}
