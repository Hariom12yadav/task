import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {
  myForm:any
  maxDate :any= new Date(2022,6,3);

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      firstname:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      lastname:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      middlename:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      email:['',[Validators.required,Validators.pattern("[a-zA-Z0-9][a-zA-Z0-9._-]+[a-zA-Z0-9]+@([a-zA-Z0-9-]+[.]){1,2}[a-zA-Z]{2,10}$")]],
      DOB:['',[Validators.required]],
      mobile:['',[Validators.required,Validators.pattern("^[7-9][0-9]{9}$")]],
      address:['',[Validators.required,Validators.pattern(/^(?![0-9(),.:/-]+$)([a-zA-Z0-9 (),.:/-]{4,})+[\w\s]+([a-zA-Z0-9()_,.:/-]){0,}[^\s]+$/)]],
      


    })
  }
  Haserror(control:any,error:any){
    return this.myForm.get(control).hasError(error)
  }
  onsubmit(){
    console.log(this.myForm.value);
    
    
  }

}
