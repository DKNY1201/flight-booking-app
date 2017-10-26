import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { BookingService } from '../../booking/booking.service';
import { Booking } from '../../models/booking.model';

@Component({
    selector: 'app-booking-history',
    templateUrl: './booking-history.component.html',
    styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {
    bookings: Booking[];

    constructor(
        private bookingService: BookingService,
        private router: Router,
        private location: Location) {
        this.bookings = [];
    }

    ngOnInit() {
        var userId = localStorage.getItem('userId');
        this.bookingService.getBookingsByUserId(userId).subscribe(bookings => {
            this.bookings = bookings;
        });
    }
}
