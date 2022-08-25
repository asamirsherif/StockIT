import { Component, OnInit } from '@angular/core';
import { IExpense } from 'app/interfaces/iexpense';
import { ExpenseService } from 'app/auth/service/expense/expense.service';
import { WarehousservService } from 'app/auth/service/warehous/warehousserv.service';
import { ExpenseCategoryService } from 'app/auth/service/expense/expense-category.service';
@Component({
  selector: 'app-expenseslist',
  templateUrl: './expenseslist.component.html',
  styleUrls: ['./expenseslist.component.scss']
})
export class ExpenseslistComponent implements OnInit {
  public pageBasicText = 3;
  expense: IExpense[];
  searchInput = "";
  searchInputDate = "";
  searchInputRef = "";
  searchInputWare = [];
  searchInputExp = [];
  WarehousArray: any[] = [];
  expenseCategories: any[] = [];

  p: number = 1;
  total: number = 0;
  constructor(private expenseService: ExpenseService, public wareser: WarehousservService, private expenseCategoryService: ExpenseCategoryService) { }

  ngOnInit(): void {
    this.getall();
    this.wareser.allware().subscribe(
      (res) => {
        this.WarehousArray = res.data;
      },
      (err: any) => {
        console.log(err);
      }
    );

    const expCatObserver = {
      next: (res) => {
        this.expenseCategories = res.data
      },
      error: (error) => {
        console.log(error);
      }
    }

    this.expenseCategoryService.getall().subscribe(expCatObserver)
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


  destroy(id: number) {
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
  pageChangeEvent(event: number) {
    this.p = event;
    this.getall();
  }
}
