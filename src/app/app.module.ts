import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { KycformComponent } from './kycform/kycform.component';
import { LoanComponent } from './loan/loan.component';
import { EmiformComponent } from './emiform/emiform.component';
import { TransactionComponent } from './transaction/transaction.component';
import { PayrefundComponent } from './payrefund/payrefund.component';
import { NocComponent } from './noc/noc.component';
import { ForeclosureComponent } from './foreclosure/foreclosure.component';
import { ConsumerComponent } from './consumer/consumer.component';
// mat 

import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PersonaldetailsComponent,
    KycformComponent,
    LoanComponent,
    EmiformComponent,
    TransactionComponent,
    PayrefundComponent,
    NocComponent,
    ForeclosureComponent,
    ConsumerComponent,
    HomeloanComponent,
    PersonalInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,ReactiveFormsModule,FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
