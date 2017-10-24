import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";

import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {AuthService} from "./auth.service";
import {AuthRoutingModule} from "./auth-routing-module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AuthRoutingModule
  ],
  providers: []
})
export class AuthModule {}
