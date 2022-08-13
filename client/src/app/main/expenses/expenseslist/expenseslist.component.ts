import { Component, OnInit } from '@angular/core';
import { IExpense } from 'app/interfaces/iexpense';
import { ExpenseService } from 'app/auth/service/expense/expense.service';
@Component({
  selector: 'app-expenseslist',
  templateUrl: './expenseslist.component.html',
  styleUrls: ['./expenseslist.component.scss']
})
export class ExpenseslistComponent implements OnInit {
  public pageBasicText = 3;
  expense: IExpense[];
  searchInput = "";

  constructor(private expenseService:ExpenseService) { }

  ngOnInit(): void {
    this.getall();
    
  }
  getall() {
    //then
    const observer = {
      next: (res) => {
        this.expense = res.data
        console.log(this.expense)
      },
      error: (error) => {
        console.log(error);

      }
    }

    //first
    this.expenseService.getall().subscribe(observer)
  }
  destroy(id:number) {
    //then
    const observer = {
      next: (res) => {
        console.log(id);
        this.getall();
      },
      error: (error) => {
        console.log(error)
      }
    }
    //first
    this.expenseService.destroy(id).subscribe(observer)
    
  }
  search(event) {
    this.expenseService.params = this.expenseService.params.set("search", event)
    this.getall()
  }
}
