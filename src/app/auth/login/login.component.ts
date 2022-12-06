import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginFormGroup: FormGroup = this.formBuilder.group({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(4)])
  });

  constructor(private formBuilder: FormBuilder) { }

  touchedAndInvalid(control: string) {
    return this.loginFormGroup.controls[`${control}`].touched && this.loginFormGroup.controls[`${control}`].invalid;
  }
  isRequired(control: string) {
    return this.loginFormGroup.controls[`${control}`].errors?.['required'];
  }

  hasMinLength(control: string) {
    return this.loginFormGroup.controls[`${control}`].errors?.['minlength'];
  }

  login() {
    return
  }
}
