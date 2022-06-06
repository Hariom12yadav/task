import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-trasaction-form',
  templateUrl: './trasaction-form.component.html',
  styleUrls: ['./trasaction-form.component.css']
})
export class TrasactionFormComponent implements OnInit {
  public transactionForm:any
maxDate:any = new Date(2022,3,6);
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      name: ['',Validators.required],
      dop: ['', Validators.required],
      amount:['', Validators.required],
      address: ['', Validators.required],
      date:['', Validators.required],
      place:['', Validators.required]
    })
  }

  onSubmit(){
    console.log(this.transactionForm.value)
  }
}
