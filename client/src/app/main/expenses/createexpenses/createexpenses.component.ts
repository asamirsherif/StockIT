import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { WarehousservService } from 'app/auth/service/warehous/warehousserv.service';
import { ExpenseCategoryService } from 'app/auth/service/expense/expense-category.service';
import { IExpenseCategory } from 'app/interfaces/iexpense-category';
import { ExpenseService } from 'app/auth/service/expense/expense.service';
import { IExpense } from 'app/interfaces/iexpense';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-createexpenses',
  templateUrl: './createexpenses.component.html',
  styleUrls: ['./createexpenses.component.scss']
})
export class CreateexpensesComponent implements OnInit {
  public pageBasicText = 3;
  WarehousArray: any[] = [];
  expenseCategories: IExpenseCategory[] = [];
  expense: IExpense[];


  submitted = false;


  errors: any = {};
  createExpenseForm: FormGroup;
  constructor(private fb: FormBuilder, public _router: Router,
    public wareser: WarehousservService, private expenseCategoryService: ExpenseCategoryService, private expenseServise: ExpenseService, private _toastr: ToastrService,
    ) {
    this.createExpenseForm = new FormGroup({
      amount: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      warehouse_id: new FormControl('', Validators.required),
      expense_category_id: new FormControl('', Validators.required),
      details: new FormControl('')
    })
  }

  ngOnInit(): void {
    //get select from database

    this.wareser.allware().subscribe(

      (res) => {

        this.WarehousArray = res.data;

        console.log(this.WarehousArray);
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


  store() {
    this.submitted = true;
    if (this.createExpenseForm.valid) {
      const user = JSON.parse(localStorage.getItem(`currentUser`))
      const formdata = this.createExpenseForm.value;
      const observer = {
        next: (result) => {
          this._toastr.success('New expense has been added');

          console.log(result, 'asdasd');
          // this.expense.push(result.data);
          this._router.navigate(['expenseslist'])


        },
        error: (error: HttpErrorResponse) => {
          this._toastr.error('Make sure for your data!');
          this.errors = error.error.errors;

        }
      }
      let data: IExpense = {
        date: formdata.date,
        details: formdata.details,
        warehouse_id: formdata.warehouse_id,
        expense_category_id: formdata.expense_category_id,
        amount: formdata.amount,
        id: formdata.id
      }

      //first
      this.expenseServise.store(data).subscribe(observer)
      console.log(data);


    }
  }
}
