import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginPage } from 'src/app/pages/admin/login/login.page';
import { AuthenticationTemplate } from 'src/app/templates/admin/authentication/authentication.template';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';


@NgModule({
  declarations: [
    LoginPage,
    AuthenticationTemplate,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class AuthenticationModule { }
