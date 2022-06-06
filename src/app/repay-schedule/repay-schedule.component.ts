import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-repay-schedule',
  templateUrl: './repay-schedule.component.html',
  styleUrls: ['./repay-schedule.component.css']
})
export class RepayScheduleComponent implements OnInit {
  public repaymentForm:any
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.repaymentForm = this.fb.group({
      name1: ['', Validators.required],
      address :['', Validators.required],
      name2:['', Validators.required],
      mob: ['',[Validators.required, Validators.pattern("((\\+91-?)|0)?[0-9]{10}")]],
      amount:['', Validators.required]
    })
  }

  onSubmit(){
    
  }
}
