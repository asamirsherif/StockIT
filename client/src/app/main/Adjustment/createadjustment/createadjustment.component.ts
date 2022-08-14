import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createadjustment',
  templateUrl: './createadjustment.component.html',
  styleUrls: ['./createadjustment.component.scss']
})
export class CreateadjustmentComponent implements OnInit {
  public pageBasicText = 3;

  submitted = false;
  
  data:any={}

  errors:any = {};

  createadjustment:FormGroup;
 
  constructor(private fb:FormBuilder,public _router:Router) {
    this.createadjustment = new FormGroup({
      warehouse_id: new FormControl('', Validators.required),
      items: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  })
}

ngOnInit(): void {
}
countChange(value) {
  // this.dateValue = value;
  console.log(value);
}
AddAdjustment(){
  this.submitted = true;
  if(this.createadjustment.valid){
    

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

    //this.product.AddProduct(this.createproduct.value).subscribe(observer);
     
  }
}
  
  quantity:number=1;
  i=1;
  plus(){
    if(this.i !=100){
      this.i++;
      this.quantity=this.i;
    }
  }
  minus(){
    if(this.i !=0){
      this.i--;
      this.quantity=this.i;
    }
  }


 
}
