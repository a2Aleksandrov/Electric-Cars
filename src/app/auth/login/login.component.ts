import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  errorMessage!: string;
  previousUrl!: string;

  loginFormGroup: FormGroup = this.formBuilder.group({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(4)])
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) { }

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
    this.authService.login(this.loginFormGroup.value).subscribe({
      next: () => {
        this.previousUrl = this.activatedRoute.snapshot.queryParams['previousUrl'];
        if (this.previousUrl != undefined) {
          return this.router.navigate([`/${this.previousUrl}`]);
        }
        return this.router.navigate(['/cars']);
      },
      error: (err) => {
        this.errorMessage = err.error;
      }
    });
  }
}
