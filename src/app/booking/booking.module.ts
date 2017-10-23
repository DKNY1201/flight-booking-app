import { NgModule } from '@angular/core';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { BookingService } from './booking.service';

@NgModule({
    imports: [
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
