// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }




import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { InsuranceCardComponent } from './insurance-card/insurance-card.component';
import { InsurancePageComponent } from './insurance-page/insurance-page.component';
import { CarInsuranceComponent } from './car-insurance/car-insurance.component';
import { CarInsurancePremiumComponent } from './car-insurance-premium/car-insurance-premium.component';

const routes: Routes = [
  { path: '', component: InsurancePageComponent }, // Default route
  { path: 'insurance', component: InsuranceCardComponent },// Route for the InsurancePageComponent
  { path: 'car-insurance', component: CarInsuranceComponent },
  { path: 'car-insurance-premium', component: CarInsurancePremiumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
