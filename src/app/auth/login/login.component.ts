import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  errorMessage!: string;

  loginFormGroup: FormGroup = this.formBuilder.group({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(4)])
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  touchedAndInvalid(control: string) {
    return this.loginFormGroup.controls[`${control}`].touched && this.loginFormGroup.controls[`${control}`].invalid;
  }
  isRequired(control: string) {
    return this.loginFormGroup.controls[`${control}`].errors?.['required'];
  }

  hasMinLength(control: string) {
    return this.loginFormGroup.controls[`${control}`].errors?.['minlength'];
  }

  login(): void {
    this.authService.login(this.loginFormGroup.value).subscribe({
      next: () => {
        this.router.navigate(['/cars']);
      },
      error: (err) => {
        this.errorMessage = err.error;
      }
    });
  }
}
