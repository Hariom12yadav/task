import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-kycform',
  templateUrl: './kycform.component.html',
  styleUrls: ['./kycform.component.css']
})
export class KycformComponent implements OnInit {
  myForm:any
  maxDate :any= new Date(2022,6,3);

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstname:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      middlename:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      lastname:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      father:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      mother:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      email:['',[Validators.required,Validators.pattern("[a-zA-Z0-9][a-zA-Z0-9._-]+[a-zA-Z0-9]+@([a-zA-Z0-9-]+[.]){1,2}[a-zA-Z]{2,10}$")]],
      panno:['',[Validators.required,Validators.pattern('[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}'),Validators.minLength(10)]],
      aadhar:['',[Validators.required,Validators.pattern('[1-9]{1}[0-9]{11}')]],
      DOB:['',[Validators.required]],
      mobile:['',[Validators.required,Validators.pattern("^[7-9][0-9]{9}$")]],
      address:['',[Validators.required,Validators.pattern(/^(?![0-9(),.:/-]+$)([a-zA-Z0-9 (),.:/-]{4,})+[\w\s]+([a-zA-Z0-9()_,.:/-]){0,}[^\s]+$/)]],
      city:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      state:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      pincode:['',[Validators.required,Validators.pattern("^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$")]]




    })
  }

}
// Haserror(control:any,error:any){
//   return this.kycForm1.get(control).hasError(error)
// }

