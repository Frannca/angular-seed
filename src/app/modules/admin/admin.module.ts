import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DefaultComponent } from 'src/app/templates/admin/default/default.component';

import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule
  ]
})
export class AdminModule { }
