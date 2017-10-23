import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {User} from "../../models/user.model";
import {Router} from "@angular/router";
import {Utils} from "../../shared/Utils";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  days: number[];
  months: number[];
  years: number[];

  constructor(private authService: AuthService, private router: Router) {
    this.days = Utils.DAYS;
    this.months = Utils.MONTHS;
    this.years = Utils.YEARS;
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let gender = '';
    let firstName = '';
    let lastName = '';
    let dayOfBirth = '';
    let monthOfBirth = '';
    let yearOfBirth = '';
    let email = '';
    this.signupForm = new FormGroup({
      'gender': new FormControl(gender, Validators.required),
      'firstName': new FormControl(firstName, Validators.required),
      'lastName': new FormControl(lastName, Validators.required),
      'dayOfBirth': new FormControl(dayOfBirth, Validators.required),
      'monthOfBirth': new FormControl(monthOfBirth, Validators.required),
      'yearOfBirth': new FormControl(yearOfBirth, Validators.required),
      'email': new FormControl(email, [Validators.required, Validators.email], this.validateUniqueEmail.bind(this)),
      'password': new FormControl(null, Validators.required)
    });
  }

  signup() {
    const gender = this.signupForm.get('gender').value;
    const firstName = this.signupForm.get('firstName').value;
    const lastName = this.signupForm.get('lastName').value;
    const dayOfBirth = this.signupForm.get('dayOfBirth').value;
    const monthOfBirth = this.signupForm.get('monthOfBirth').value;
    const yearOfBirth = this.signupForm.get('yearOfBirth').value;
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;

    const user = new User(gender, firstName, lastName, dayOfBirth, monthOfBirth, yearOfBirth, email, password);

    this.authService.signup(user)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/']);
        }
      );
  }

  validateUniqueEmail(control: FormControl): Observable<any> | Promise<any> {
    return this.authService.checkEmail(control.value);
  }

}
