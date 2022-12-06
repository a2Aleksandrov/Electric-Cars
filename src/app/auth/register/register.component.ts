import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passCheck } from '../util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(4)]);

  registerFormGroup: FormGroup = this.formBuilder.group({
    username: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: this.passwordControl,
    repass: new FormControl(null, [passCheck(this.passwordControl)])
  });

  constructor(private formBuilder: FormBuilder) { }


  touchedAndInvalid(control: string) {
    return this.registerFormGroup.controls[`${control}`].touched && this.registerFormGroup.controls[`${control}`].invalid;
  }

  isRequired(control: string) {
    return this.registerFormGroup.controls[`${control}`].errors?.['required'];
  }

  hasMinLength(control: string) {
    return this.registerFormGroup.controls[`${control}`].errors?.['minlength'];
  }

  isInvalid(email: string) {
    return this.registerFormGroup.controls[`${email}`].errors?.['email'];
  }

  samePasswords(repass: string) {
    return this.registerFormGroup.controls[`${repass}`].errors?.['doesNotMatch'];
  }

  register() {
    return
  }

}
