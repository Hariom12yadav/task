import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-emiform',
  templateUrl: './emiform.component.html',
  styleUrls: ['./emiform.component.css']
})
export class EmiformComponent implements OnInit {
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
