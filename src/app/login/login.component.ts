import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginServiceService } from '../webservices/login-service.service';
import { LoginBody } from './LoginBody';
import { LoginResponse } from './LoginResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loginResponse: LoginResponse;

  constructor(public nav: NavbarService, private formBuilder: FormBuilder, private loginServiceService: LoginServiceService, public routes: Router) { }



  ngOnInit() {
    this.nav.hide();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      const loginBody = new LoginBody();
      loginBody.emailId = this.loginForm.controls.username.value;
      loginBody.password = this.loginForm.controls.password.value;

      this.loginServiceService.doLogin(loginBody)
        .subscribe(
          data => {
            this.loginResponse = data;
            console.log('objmandate', this.loginResponse);
            if (this.loginResponse.status === 'Success') {
              this.routes.navigate(['/user']);
            }
          }
        );
    }
  }
  get f() { return this.loginForm.controls; }
}
