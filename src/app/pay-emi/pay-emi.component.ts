import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-pay-emi',
  templateUrl: './pay-emi.component.html',
  styleUrls: ['./pay-emi.component.css']
})
export class PayEMIComponent implements OnInit {
public EMIForm:any
maxDate:any = new Date(2022,3,6);
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.EMIForm = this.fb.group({
      hname: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mob: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      dop:['',Validators.required],
      amount: ['', Validators.required]
    })
  }

  onSubmit(){
    console.log(this.EMIForm.value)
  }
}
