import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-expenseupdate',
  templateUrl: './expenseupdate.component.html',
  styleUrls: ['./expenseupdate.component.scss']
})
export class ExpenseupdateComponent implements OnInit {
  public pageBasicText = 3;

  submitted = false;
  
  data:any={}

  errors:any = {};
  editexpence:FormGroup;

  constructor(private fb:FormBuilder,public _router:Router) {
    this.editexpence = new FormGroup({
      amount: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      warehouse_id: new FormControl('', Validators.required),
      expense_category_id: new FormControl('', Validators.required),
      details: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }
  EditExpense(){
    this.submitted = true;
    if(this.editexpence.valid){
      
  
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
  
      //this.product.EditExpense(this.editexpence.value).subscribe(observer);
       
    }
  }

}
