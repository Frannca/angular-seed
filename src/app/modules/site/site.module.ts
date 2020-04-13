import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { DefaultTemplate } from 'src/app/templates/site/default/default.template';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    DefaultTemplate
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class SiteModule { }
