import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  hidePassword = true;
  passwordInputType = 'password';
  passwordIconType = 'visibility_off';

  constructor() { }

  ngOnInit(): void {
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;

    this.passwordInputType = this.hidePassword ? 'password' : 'text';
    this.passwordIconType = this.hidePassword ? 'visibility_off' : 'visibility';
  }

}
