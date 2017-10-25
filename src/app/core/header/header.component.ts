import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.userLoggedIn.subscribe(
      (username: string) => this.username = username
    );

    // In case user refresh browser
    this.username = localStorage.getItem('username') ? localStorage.getItem('username') : '';
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
