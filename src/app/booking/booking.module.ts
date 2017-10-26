import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { NameTitlePipe } from './name-title.pipe';
import { BookingService } from './booking.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BookingRoutingModule
    ],
    exports: [
        BookingComponent,
        NameTitlePipe
    ],
    declarations: [
        BookingComponent,
        NameTitlePipe
    ],
    providers: [
        BookingService
    ]
})
export class BookingModule { }
