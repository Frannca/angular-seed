import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  hidePassword = true;
  passwordInputType = 'password';
  passwordIconType = 'visibility_off';

  loginForm = this.fb.group({
    email: [null,
      [
        Validators.required,
        Validators.email
      ]
    ],
    password: [null, Validators.required]
  }, { updateOn: 'submit' });

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getErrorMessage(field) {
    if (this.loginForm.controls[field].hasError('required')) {
      return 'You must enter a value';
    }

    if (this.loginForm.controls[field].hasError('email')) {
      return 'You must supply a valid e-mail';
    }
  }

  onSubmit() {
    if (this.loginForm.valid === false) return false;

    this.authenticationService.fakeCheckLogin(this.loginForm.value)
      .subscribe(user => {
        if (user.length === 0) {
          this.openSnackBar('E-mail or password incorrect', null);
        } else {
          this.authenticationService.login();
          this.router.navigate(['/admin']);
        }
      });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;

    this.passwordInputType = this.hidePassword ? 'password' : 'text';
    this.passwordIconType = this.hidePassword ? 'visibility_off' : 'visibility';
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
