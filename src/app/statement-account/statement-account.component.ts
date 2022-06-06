import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-statement-account',
  templateUrl: './statement-account.component.html',
  styleUrls: ['./statement-account.component.css']
})
export class StatementAccountComponent implements OnInit {
  public statementForm:any
maxDate:any = new Date(2022,3,6);
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.statementForm = this.fb.group({
      accno1: ['', Validators.required],
      dob: ['', Validators.required],
      accno2: ['', Validators.required],
      loanamount:['', Validators.required],
      emiamount: ['', Validators.required]
    })
  }

  onSubmit(){
   console.log(this.statementForm.value) 
  }

}
