import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ProfileComponent} from "./profile/profile.component";
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { BookingHistoryDetailComponent } from './booking-history/booking-history-detail.component';
import {AuthGuard} from "../auth/auth-guard.service";

const userRoutes: Routes = [
  { path: 'user/my-profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'user/my-booking', component: BookingHistoryComponent, canActivate: [AuthGuard] },
  { path: 'user/my-booking/:id', component: BookingHistoryDetailComponent, canActivate: [AuthGuard] }
]

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {}
