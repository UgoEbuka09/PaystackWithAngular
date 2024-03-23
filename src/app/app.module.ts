import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaystackComponent } from './paystack/paystack.component';
import { Angular4PaystackModule } from 'angular4-paystack';

@NgModule({
  declarations: [AppComponent, PaystackComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Angular4PaystackModule.forRoot('Enter_your_public_key_here'),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
