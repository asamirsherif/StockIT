import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { IExpense } from 'app/interfaces/iexpense';
import { ExpenseService } from 'app/auth/service/expense/expense.service';
import { WarehousservService } from 'app/auth/service/warehous/warehousserv.service';
import { ExpenseCategoryService } from 'app/auth/service/expense/expense-category.service';
import { IExpenseCategory } from 'app/interfaces/iexpense-category';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-expenseupdate',
  templateUrl: './expenseupdate.component.html',
  styleUrls: ['./expenseupdate.component.scss']
})
export class ExpenseupdateComponent implements OnInit {
  WarehousArray:any[]=[];
  expenseCategories: IExpenseCategory[]=[];
  expense:IExpense[];
  public pageBasicText = 3;

  submitted = false;
  
  data:any={}

  errors:any = {};
  editexpence:FormGroup;

  constructor(private fb:FormBuilder,public _router:Router,private expenseService:ExpenseService, private _toastr: ToastrService,public _activateRouter:ActivatedRoute,public wareser:WarehousservService,private expenseCategoryService :ExpenseCategoryService ) {
    this.editexpence = new FormGroup({
      amount: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      warehouse_id: new FormControl('', Validators.required),
      expense_category_id: new FormControl('', Validators.required),
      details: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    const id = +this._activateRouter.snapshot.paramMap.get('id')
    this.edit(id);
    console.log(id);


    //get select from database

    this.wareser.allware().subscribe(

      (res) => {

        this.WarehousArray=res.data;

        console.log(this.WarehousArray);
      },

      (err:any) => {

        console.log(err);

      }

    );

   const  expCatObserver = {
      next:(res)=>{
        this.expenseCategories = res.data                
      },
      error:(error)=>{
        console.log(error);
      }
    }

    this.expenseCategoryService.getall().subscribe(expCatObserver)
  }
  
  edit(id:number) {
    //then
    const observer = {
      next: (res) => {
        this.editexpence.get("warehouse_id").setValue(res.data.warehouse_id)
        this.editexpence.get("amount").setValue(res.data.amount)
        this.editexpence.get("date").setValue(res.data.date)
        this.editexpence.get("expense_category_id").setValue(res.data.expense_category_id)
        this.editexpence.get("details").setValue(res.data.details)

      }
    }

    //first
    this.expenseService.show(id).subscribe(observer)
  }
  update(data:IExpense) {
    this.submitted = true;
    if (this.editexpence.valid) {
      const observer = {
        next: (res) => {
          this._toastr.success('expense updated');
          console.log(res);
        },
        error: (error) => {
          console.log(error);
        }
      }
      //first
      this.expenseService.update(this._activateRouter.snapshot.params['id'], this.editexpence.value).subscribe(observer)
      this._router.navigate(['expenseslist'])

    }
  }
}
