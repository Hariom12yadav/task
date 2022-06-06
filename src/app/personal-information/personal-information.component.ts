import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  public personalForm:any
  maxDate:any = new Date(2022,3,6);
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.personalForm = this.fb.group({
      fname: ['',Validators.required],
       mname: ['',Validators.required],
       lname: ['',Validators.required],
       email: ['',[Validators.required,Validators.email]],
       mob: ['', [Validators.required,Validators.pattern("((\\+91-?)|0)?[0-9]{10}")]],
       dob: ['', Validators.required],
       address:['',Validators.required],
       city:['',Validators.required],
       state:['',Validators.required],
       pin:['',[Validators.required,Validators.pattern('[1-9][0-9]{5}')]],
       country:['',Validators.required],
       pan:['',[Validators.required,Validators.pattern('[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}')]],
       aadhar:['',[Validators.required,Validators.pattern('[1-9]{1}[0-9]{11}')]],
     })
  }

  onSubmit1(){
    console.log(this.personalForm.value)
  }

}
