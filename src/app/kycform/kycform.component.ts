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
      firstname:['',[Validators.required]],
      middlename:['',[Validators.required]],
      lastname:['',[Validators.required]],
      email:['',[Validators.required]],
      panno:['',[Validators.required,Validators.pattern('[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}'),Validators.minLength(10)]],
      aadhar:['',[Validators.required,Validators.pattern('[1-9]{1}[0-9]{11}')]],
      DOB:['',[Validators.required]],
      mobile:['',[Validators.required]],
      address:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      pincode:['',[Validators.required]]




    })
  }

}
// Haserror(control:any,error:any){
//   return this.kycForm1.get(control).hasError(error)
// }

