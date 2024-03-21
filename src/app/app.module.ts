import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaystackComponent } from './paystack/paystack.component';
import { PaystackModule } from './paystack/paystack.module';
import { Angular4PaystackModule } from 'angular4-paystack';

@NgModule({
  declarations: [AppComponent, PaystackComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaystackModule,
    Angular4PaystackModule.forRoot(
      'pk_test_cb46b3de39ac84cc025aea974fd4878509e77409'
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
