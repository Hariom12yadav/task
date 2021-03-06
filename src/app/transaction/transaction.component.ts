import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  public transactionForm:any
  maxDate:any = new Date(2022,3,6);

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      name: ['',Validators.required],
      dop: ['', Validators.required],
      amount:['', Validators.required],
      address: ['', Validators.required],
      date:['', Validators.required],
      place:['', Validators.required]
    })
  }
  onSubmit(){
    console.log(this.transactionForm.value)
  }

}
