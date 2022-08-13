import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { WarehousservService } from 'app/auth/service/warehous/warehousserv.service';
import { ExpenseCategoryService } from 'app/auth/service/expense/expense-category.service';
import { IExpenseCategory } from 'app/interfaces/iexpense-category';

@Component({
  selector: 'app-createexpenses',
  templateUrl: './createexpenses.component.html',
  styleUrls: ['./createexpenses.component.scss']
})
export class CreateexpensesComponent implements OnInit {
  public pageBasicText = 3;
  WarehousArray:any[]=[];
  expenseCategories: IExpenseCategory[]=[];

  submitted = false;
  
  data:any={}

  errors:any = {};
  createexpence:FormGroup;
  constructor(private fb:FormBuilder,public _router:Router,
  public wareser:WarehousservService,private expenseCategoryService :ExpenseCategoryService ) {
    this.createexpence = new FormGroup({
      amount: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      warehouse_id: new FormControl('', Validators.required),
      expense_category_id: new FormControl('', Validators.required),
      details: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
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
  formSubmit(){
    this.submitted = true;
    if(this.createexpence.valid){
      
  
      const observer = {
        next: (result) => {
            console.log(result,'asdasd');
        }, 
        error: (error) => {
            // console.log("error occured", error)
            this.errors = error;
            console.log(this.errors.errors);
        }
      }
  
       
    }
  }
 
}
