import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {
  maxDate :any= new Date(2022,6,3);

  constructor() { }

  ngOnInit(): void {
  }

}
