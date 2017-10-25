import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { BookingModule } from './booking/booking.module';
import {AuthService} from "./auth/auth.service";
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import {AuthModule} from "./auth/auth.module";
import {AirportService} from "./core/airport.service";
import { SearchComponent } from './search/search.component';
import {SearchService} from "./search/search.service";
import {SharedModule} from "./shared/shared.module";
import {AuthInterceptor} from "./shared/auth.interceptor";
import {LoggingInterceptor} from "./shared/logging.interceptor";
import {AuthGuard} from "./auth/auth-guard.service";
import {UserModule} from "./user/user.module";
import {UserService} from "./user/user.service";

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
    AuthModule,
    SharedModule,
    UserModule
  ],
  providers: [
    AuthService,
    AirportService,
    SearchService,
    AuthGuard,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
