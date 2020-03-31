import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginPage } from 'src/app/pages/admin/login/login.page';
import { AuthenticationTemplate } from 'src/app/templates/admin/authentication/authentication.template';


@NgModule({
  declarations: [
    LoginPage,
    AuthenticationTemplate,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
