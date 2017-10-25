import {NgModule} from "@angular/core";
import {ProfileComponent} from "./profile/profile.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UserRoutingModule} from "./user-routing.module";

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class UserModule {

}
