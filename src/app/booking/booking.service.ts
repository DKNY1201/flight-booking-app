import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Booking } from './booking';

@Injectable()
export class BookingService {
    private baseUrl = 'api/bookings';

    constructor(private http: HttpClient) { }

    getBooking(id: number): Observable<Booking> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<Booking>(url);
    }

    addBooking(booking: Booking): Observable<Booking> {
        return this.http.post<Booking>(this.baseUrl, booking);
    }

    updateBooking(booking: Booking): Observable<Booking> {
        const url = `${this.baseUrl}/${booking.id}`;
        return this.http.put<Booking>(url, booking);
    }

    deleteBooking(id: number): Observable<boolean> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<boolean>(url);
    }
}