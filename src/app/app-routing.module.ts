import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumerComponent } from './consumer/consumer.component';
import { ForeclosureComponent } from './foreclosure/foreclosure.component';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { KycformComponent } from './kycform/kycform.component';
import { MainComponent } from './main/main.component';
import { NocComponent } from './noc/noc.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';

const routes: Routes = [
 {path:"",component:MainComponent},
 {path:"consumer",component:ConsumerComponent},
 {path:"homeloan",component:HomeloanComponent},
 {path:"personaldetails",component:PersonaldetailsComponent},
 {path:"kyc",component:KycformComponent},
 {path:"noc",component:NocComponent},
 {path:"fs",component:ForeclosureComponent},
 
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
