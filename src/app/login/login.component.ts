import { Component, OnInit} from '@angular/core';
import { NavbarService } from '../navbar.service';
import { FormGroup, FormControl,  Validators , FormBuilder} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(public nav: NavbarService, private formBuilder: FormBuilder) { }

  ngOnInit() {
   this.nav.hide();
   this.loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
});

  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));
}
get f() { return this.loginForm.controls; }
}
