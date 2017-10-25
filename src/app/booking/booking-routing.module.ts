import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingComponent } from './booking.component';
import { BookingHistoryComponent } from './booking-history.component';

const routes: Routes = [
    { path: 'booking/:id', component: BookingComponent },
    { path: 'booking-history', component: BookingHistoryComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class BookingRoutingModule { }
