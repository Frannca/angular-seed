import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DefaultTemplate } from 'src/app/templates/admin/default/default.template';

import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    DefaultTemplate
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule
  ]
})
export class AdminModule { }
