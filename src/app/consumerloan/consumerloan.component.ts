import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-consumerloan',
  templateUrl: './consumerloan.component.html',
  styleUrls: ['./consumerloan.component.css']
})
export class ConsumerloanComponent implements OnInit {
  public loanForm:any
  maxDate :any= new Date(2022,6,3);

  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      fname :['', Validators.required],
      mname :['', Validators.required],
      lname :['', Validators.required],
      faname :['', Validators.required],
      moname :['', Validators.required],
      email :['', [Validators.required, Validators.email]],
      mob :['', Validators.required],
      city:['', Validators.required],
      state:['', Validators.required],
      category:['', Validators.required],
      religion :['',Validators.required],
      nationality :['', Validators.required],
      pob :['',Validators.required],
      aadhar :['', [Validators.required,Validators.pattern('[1-9]{1}[0-9]{11}')]],
      pan :['', Validators.required],
      qualification :['',Validators.required] 
    })
  }
  onSubmit(){
    console.log(this.loanForm.value)    
    }

}
