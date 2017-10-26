import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { BookingService } from '../../booking/booking.service';
import { SearchService } from '../../search/search.service';
import { Passenger } from '../../models/passenger.model';
import { Booking } from '../../models/booking.model';
import { Itinerary } from '../../models/itinerary.model';

@Component({
    selector: 'app-booking-history-detail',
    templateUrl: './booking-history-detail.component.html',
    styleUrls: ['./booking-history-detail.component.scss']
})
export class BookingHistoryDetailComponent implements OnInit {
    booking: Booking;
    passengers: Passenger[];
    itinerary: Itinerary;

    constructor(
        private bookingService: BookingService,
        private searchService: SearchService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private location: Location) {
        this.passengers = [];
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            var bookingId = params['id'];
            this.bookingService.getBooking(bookingId).subscribe(booking => {
                this.booking = booking;
                this.searchService.getItinerary(booking.itineraryId).subscribe(itinerary => {
                    this.itinerary = itinerary;
                    let price = 0;
                    for (const flight of itinerary.flights) {
                        price += flight.price;
                    }
                    itinerary.price = price;
                });
            });
        });
    }

    goBack(): void {
        this.location.back();
    }
}
