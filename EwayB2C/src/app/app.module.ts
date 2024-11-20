import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
import { InsuranceCardComponent } from './insurance-card/insurance-card.component';
import { InsurancePageComponent } from './insurance-page/insurance-page.component';
import { CarInsuranceComponent } from './car-insurance/car-insurance.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarInsurancePremiumComponent } from './car-insurance-premium/car-insurance-premium.component'; 
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './Auth/auth.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatePipe } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    InsuranceCardComponent,
    InsurancePageComponent,
    CarInsuranceComponent,
    CarInsurancePremiumComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    
  ],
  providers: [
    AuthService,DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
