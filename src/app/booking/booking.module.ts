import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { BookingService } from './booking.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BookingRoutingModule
    ],
    exports: [
        BookingComponent
    ],
    declarations: [
        BookingComponent
    ],
    providers: [
        BookingService
    ]
})
export class BookingModule { }
