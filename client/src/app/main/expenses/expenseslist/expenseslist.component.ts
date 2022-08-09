import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenseslist',
  templateUrl: './expenseslist.component.html',
  styleUrls: ['./expenseslist.component.scss']
})
export class ExpenseslistComponent implements OnInit {
  public pageBasicText = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
