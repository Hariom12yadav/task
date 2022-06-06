import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-payrefund',
  templateUrl: './payrefund.component.html',
  styleUrls: ['./payrefund.component.css']
})
export class PayrefundComponent implements OnInit {
  public refundForm:any
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.refundForm = this.fb.group({
      name: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      address:['', Validators.required],
      city:['', Validators.required],
      state: ['', Validators.required],
      pin:['', [Validators.required,Validators.pattern('[1-9][0-9]{5}')]],
      country:['', Validators.required],
      mob:['', [Validators.required,Validators.pattern("((\\+91-?)|0)?[0-9]{10}")]]
    })
  }

  onSubmit(){
    console.log(this.refundForm.value)
  }
}
