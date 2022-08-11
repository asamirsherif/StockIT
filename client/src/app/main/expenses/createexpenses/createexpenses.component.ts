import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createexpenses',
  templateUrl: './createexpenses.component.html',
  styleUrls: ['./createexpenses.component.scss']
})
export class CreateexpensesComponent implements OnInit {
  public pageBasicText = 3;

  submitted = false;
  
  data:any={}

  errors:any = {};
  createexpence:FormGroup;
  constructor(private fb:FormBuilder,public _router:Router) {
    this.createexpence = new FormGroup({
      amount: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      warehouse_id: new FormControl('', Validators.required),
      expense_category_id: new FormControl('', Validators.required),
      details: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
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
  
      //this.product.AddProduct(this.createexpence.value).subscribe(observer);
       
    }
  }
 
}
