import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';

import localePt from '@angular/common/locales/pt';
import { HttpErrorHandlerService } from './services/core/http-error-handler.service';

registerLocaleData(localePt, 'pt-Br');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpErrorHandlerService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-Br'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
