import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ProfileComponent} from "./profile/profile.component";
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { BookingHistoryDetailComponent } from './booking-history/booking-history-detail.component';
import {AuthGuard} from "../auth/auth-guard.service";

const userRoutes: Routes = [
  { path: 'user/my-profile', component: ProfileComponent },
  { path: 'user/my-booking', component: BookingHistoryComponent },
  { path: 'user/my-booking/:id', component: BookingHistoryDetailComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {}
