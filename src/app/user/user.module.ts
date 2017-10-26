import {NgModule} from "@angular/core";
import {ProfileComponent} from "./profile/profile.component";
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UserRoutingModule} from "./user-routing.module";

@NgModule({
  declarations: [
    ProfileComponent,
    BookingHistoryComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    ProfileComponent,
    BookingHistoryComponent
  ],
  providers: []
})
export class UserModule {

}
