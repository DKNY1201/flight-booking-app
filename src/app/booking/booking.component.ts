import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BookingService } from './booking.service';
import { SearchService } from '../search/search.service';
import { Passenger } from '../models/passenger.model';
import { Card } from '../models/card.model';
import { Billing } from '../models/billing.model';
import { Booking } from '../models/booking.model';
import { Itinerary } from '../models/itinerary.model';
import { Country } from '../models/country.model';
import { State } from '../models/state.model';
import { Utils } from '../shared/Utils';

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
    submitted: boolean;
    days: number[];
    months: number[];
    years: number[];
    countries: Country[];
    states: State[];
    bookingForm: FormGroup;

    itinerary: Itinerary;

    constructor(
        private bookingService: BookingService,
        private searchService: SearchService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
        this.itinerary = new Itinerary('', '', '', 1, 0, '', false, []);
    }

    ngOnInit(): void {
        this.submitted = false;
        this.days = Utils.DAYS;
        this.months = Utils.MONTHS;
        this.years = Utils.YEARS;
        this.countries = Utils.COUNTRIES;
        this.states = Utils.STATES;
        this.bookingForm = new FormGroup({
            'passengerGender': new FormControl('', Validators.required),
            'passengerFirstName': new FormControl('', Validators.required),
            'passengerMiddleName': new FormControl(),
            'passengerLastName': new FormControl('', Validators.required),
            'passengerDobMonth': new FormControl('', Validators.required),
            'passengerDobDay': new FormControl('', Validators.required),
            'passengerDobYear': new FormControl('', Validators.required),
            'cardNumber': new FormControl('', Validators.required),
            'cardType': new FormControl('', Validators.required),
            'cardExpMonth': new FormControl('', Validators.required),
            'cardExpYear': new FormControl('', Validators.required),
            'cardCVV': new FormControl('', Validators.required),
            'cardFirstName': new FormControl('', Validators.required),
            'cardLastName': new FormControl('', Validators.required),
            'billingAddress': new FormControl('', Validators.required),
            'billingSuite': new FormControl(),
            'billingCity': new FormControl('', Validators.required),
            'billingCountry': new FormControl('', Validators.required),
            'billingState': new FormControl(),
            'billingZipCode': new FormControl('', Validators.required),
            'billingPhoneCode': new FormControl('', Validators.required),
            'billingPhoneNumber': new FormControl('', Validators.required),
            'billingPhoneExt': new FormControl(),
        });
        this.activatedRoute.params.subscribe((params: Params) => {
            var itineraryId = params['id'];
            this.searchService.getItinerary(itineraryId).subscribe(itinerary => {
                console.log(itinerary);
                this.itinerary = itinerary;
            });
        });
    }

    validatePassengerDob(): boolean {
        var passengerDobMonth = this.bookingForm.get('passengerDobMonth');
        var passengerDobDay = this.bookingForm.get('passengerDobDay');
        var passengerDobYear = this.bookingForm.get('passengerDobYear');
        if (passengerDobMonth.valid && passengerDobDay.valid && passengerDobYear.valid && passengerDobMonth.touched)
            return true;
        else
            return !(passengerDobMonth.touched || passengerDobDay.touched || passengerDobYear.touched || this.submitted);
    }

    validateCreditCard(): boolean {
        var cardNumber = this.bookingForm.get('cardNumber');
        var cardType = this.bookingForm.get('cardType');
        var cardExpMonth = this.bookingForm.get('cardExpMonth');
        var cardExpYear = this.bookingForm.get('cardExpYear');
        var cardCVV = this.bookingForm.get('cardCVV');
        if (cardNumber.valid && cardType.valid && cardExpMonth.valid && cardExpYear.valid && cardCVV.valid)
            return true;
        else
            return !(cardNumber.touched || cardType.touched || cardExpMonth.touched || cardExpYear.touched || cardCVV.touched || this.submitted);
    }

    validateBillingPhone(): boolean {
        var billingPhoneCode = this.bookingForm.get('billingPhoneCode');
        var billingPhoneNumber = this.bookingForm.get('billingPhoneNumber');
        if (billingPhoneCode.valid && billingPhoneNumber.valid)
            return true;
        else
            return !(billingPhoneCode.touched || billingPhoneNumber.touched || this.submitted);
    }

    confirmBooking(): void {
        this.submitted = true;
        var form = this.bookingForm;
        if (form.valid) {
            var passenger = new Passenger();
            passenger.gender = form.get('passengerGender').value;
            passenger.firstName = form.get('passengerFirstName').value;
            passenger.middleName = form.get('passengerMiddleName').value;
            passenger.lastName = form.get('passengerLastName').value;
            passenger.dobMonth = form.get('passengerDobMonth').value;
            passenger.dobDay = form.get('passengerDobDay').value;
            passenger.dobYear = form.get('passengerDobYear').value;

            var card = new Card();
            card.number = form.get('cardNumber').value;
            card.type = form.get('cardType').value;
            card.expMonth = form.get('cardExpMonth').value;
            card.expYear = form.get('cardExpYear').value;
            card.cvv = form.get('cardCVV').value;
            card.firstName = form.get('cardFirstName').value;
            card.lastName = form.get('cardLastName').value;

            var billing = new Billing();
            billing.address = form.get('billingAddress').value;
            billing.suite = form.get('billingSuite').value;
            billing.city = form.get('billingCity').value;
            billing.country = form.get('billingCountry').value;
            billing.state = form.get('billingState').value;
            billing.zipCode = form.get('billingZipCode').value;
            billing.phoneCode = form.get('billingPhoneCode').value;
            billing.phoneNumber = form.get('billingPhoneNumber').value;
            billing.phoneExt = form.get('billingPhoneExt').value;

            var booking = new Booking(passenger, card, billing);
            booking.userId = localStorage.getItem('userId');
            booking.itineraryId = this.itinerary['_id'];
            var flights = this.itinerary.flights;
            if (flights.length > 0) {
                var departure = flights[0];
                booking.departure = `${departure.leavingAirport.name} (${departure.leavingAirport.iata})`;
                booking.departureDate = departure.startDate;
                booking.departureTime = departure.startTime
                var arrival = flights[flights.length - 1];
                booking.arrival = `${arrival.goingAirport.name} (${arrival.goingAirport.iata})`;
                booking.arrivalDate = arrival.endDate;
                booking.arrivalTime = arrival.endTime;
            }

            this.bookingService.addBooking(booking).subscribe(result => {
                this.router.navigate(['/user/booking-history']);
            });
        }
    }
}
