import {NgModule} from "@angular/core";
import {ProfileComponent} from "./profile/profile.component";
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { BookingHistoryDetailComponent } from './booking-history/booking-history-detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UserRoutingModule} from "./user-routing.module";

@NgModule({
  declarations: [
    ProfileComponent,
    BookingHistoryComponent,
    BookingHistoryDetailComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    ProfileComponent,
    BookingHistoryComponent,
    BookingHistoryDetailComponent
  ],
  providers: []
})
export class UserModule {

}
