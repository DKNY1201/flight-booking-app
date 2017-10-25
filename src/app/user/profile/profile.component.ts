import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {Utils} from "../../shared/Utils";

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

  constructor() {
    this.days = Utils.DAYS;
    this.months = Utils.MONTHS;
    this.years = Utils.YEARS;
  }

  ngOnInit() {
    this.initForm();
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

  }

}
