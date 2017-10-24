import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {HomeComponent} from "./core/home/home.component";

const appRoutes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
