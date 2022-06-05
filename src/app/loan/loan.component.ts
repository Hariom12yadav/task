import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  maxDate :any= new Date(2022,6,3);

  constructor() { }

  ngOnInit(): void {
  }

}
