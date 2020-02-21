import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { DefaultComponent } from 'src/app/templates/site/default/default.component';

import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MatToolbarModule
  ]
})
export class SiteModule { }
