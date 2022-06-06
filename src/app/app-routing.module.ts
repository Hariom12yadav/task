import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumerComponent } from './consumer/consumer.component';
import { ForeclosureComponent } from './foreclosure/foreclosure.component';
import { HomeloanComponent } from './homeloan/homeloan.component';

import { KycformComponent } from './kycform/kycform.component';
import { MainComponent } from './main/main.component';
import { NocComponent } from './noc/noc.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';

import { LoanComponent } from './loan/loan.component';

import { PayEMIComponent } from './pay-emi/pay-emi.component';
import { PayrefundComponent } from './payrefund/payrefund.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { RepayScheduleComponent } from './repay-schedule/repay-schedule.component';
import { StatementAccountComponent } from './statement-account/statement-account.component';
import { TrasactionFormComponent } from './trasaction-form/trasaction-form.component';
import { ConsumerloanComponent } from './consumerloan/consumerloan.component';
import { EmiformComponent } from './emiform/emiform.component';
import { TransactionComponent } from './transaction/transaction.component';
import { RefundComponent } from './refund/refund.component';

const routes: Routes = [
 {path:"",component:MainComponent},
 {path:"consumer",component:ConsumerComponent},
 {path:"homeloan",component:HomeloanComponent},

 {path:"personaldetails",component:PersonaldetailsComponent},
 {path:"kyc",component:KycformComponent},
 {path:"noc",component:NocComponent},
 {path:"fs",component:ForeclosureComponent},
 {path:"consumerloan",component:ConsumerloanComponent},
 {path:"emiform",component:EmiformComponent},
 {path:"consumertransaction",component:TransactionComponent},
 {path:"refund",component:RefundComponent},

 
  



 {path:"personalInfo", component:PersonalInformationComponent},
 {path:"EMIForm", component:PayEMIComponent},
 {path:"transactionForm", component:TrasactionFormComponent},
 {path:"statementForm", component:StatementAccountComponent},
 {path:"repaymentForm", component:RepayScheduleComponent},
 {path:"refundForm",component:PayrefundComponent},
 {path:"loanForm", component:LoanComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
