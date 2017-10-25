import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingComponent } from './booking.component';

const routes: Routes = [
    { path: 'booking/:id', component: BookingComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class BookingRoutingModule { }
