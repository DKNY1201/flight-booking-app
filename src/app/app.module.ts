import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AppRoutingModule} from "./app-routing.module";
import { BookingModule } from './booking/booking.module';
import {AuthService} from "./auth/auth.service";
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthModule} from "./auth/auth.module";
import {AirportService} from "./core/airport.service";
import { SearchComponent } from './search/search.component';
import {SearchService} from "./search/search.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BookingModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [AuthService, AirportService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
