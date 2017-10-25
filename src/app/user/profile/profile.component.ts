import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {Utils} from "../../shared/Utils";
import {UserService} from "../user.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  days: number[];
  months: number[];
  years: number[];

  constructor(private userService: UserService, private authService: AuthService) {
    this.days = Utils.DAYS;
    this.months = Utils.MONTHS;
    this.years = Utils.YEARS;
  }

  ngOnInit() {
    this.initForm();
    this.getProfile();
  }

  initForm() {
    this.profileForm = new FormGroup({
      'gender': new FormControl(null, Validators.required),
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'dayOfBirth': new FormControl(null, Validators.required),
      'monthOfBirth': new FormControl(null, Validators.required),
      'yearOfBirth': new FormControl(null, Validators.required),
    });
  }

  editProfile() {
    this.userService.editProfile(
      this.profileForm.get('firstName').value,
      this.profileForm.get('lastName').value,
      this.profileForm.get('gender').value,
      this.profileForm.get('dayOfBirth').value,
      this.profileForm.get('monthOfBirth').value,
      this.profileForm.get('yearOfBirth').value
    ).subscribe(
      data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('username', data.username);

        this.authService.userLoggedIn.next(data.username);
      },
      error => console.error(error)
    );
  }

  getProfile() {
    this.userService.getProfile()
      .subscribe(
        data => {
          console.log(data);
          this.updateUserDataToForm(data);
        }
      );
  }

  updateUserDataToForm(data) {
    this.profileForm.patchValue({
      'gender': data.gender ? 1 : 0,
      'firstName': data.firstName,
      'lastName': data.lastName,
      'dayOfBirth': data.dayOfBirth,
      'monthOfBirth': data.monthOfBirth,
      'yearOfBirth': data.yearOfBirth
    });
  }

}
