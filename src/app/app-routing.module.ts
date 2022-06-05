import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumerComponent } from './consumer/consumer.component';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
 {path:"",component:MainComponent},
 {path:"consumer",component:ConsumerComponent},
 {path:"homeloan",component:HomeloanComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
