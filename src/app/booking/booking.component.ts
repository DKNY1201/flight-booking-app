import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookingService } from './booking.service';
import { Booking } from './booking';

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
    constructor(
        private bookingService: BookingService,
        private router: Router) {
    }

    ngOnInit(): void {

    }
}
