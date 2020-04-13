import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { DefaultTemplate } from 'src/app/templates/site/default/default.template';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DefaultTemplate
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class SiteModule { }
