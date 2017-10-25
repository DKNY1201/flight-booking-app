import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {HomeComponent} from "./core/home/home.component";
import {SearchComponent} from "./search/search.component";
import {AuthGuard} from "./auth/auth-guard.service";

const appRoutes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchComponent, canActivate: [AuthGuard]}
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
