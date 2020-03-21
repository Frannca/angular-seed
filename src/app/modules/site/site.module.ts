import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { DefaultTemplate } from 'src/app/templates/site/default/default.template';

import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    DefaultTemplate
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MatToolbarModule
  ]
})
export class SiteModule { }
