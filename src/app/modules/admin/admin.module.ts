import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DefaultTemplate } from 'src/app/templates/admin/default/default.template';

import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    DefaultTemplate
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatButtonModule
  ]
})
export class AdminModule { }
