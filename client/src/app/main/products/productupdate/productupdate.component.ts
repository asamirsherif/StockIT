import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productupdate',
  templateUrl: './productupdate.component.html',
  styleUrls: ['./productupdate.component.scss']
})
export class ProductupdateComponent implements OnInit {
  public pageBasicText = 3;

  submitted = false;
  
  data:any={}

  errors:any = {};

  productupdate:FormGroup;

  constructor(private fb:FormBuilder,public _router:Router) { 
  this.productupdate = new FormGroup({
    name: new FormControl('', Validators.required),
  code: new FormControl('', Validators.required),
  category_id:  new FormControl('', Validators.required),
  type_barcode:  new FormControl('', Validators.required),
  cost: new FormControl('', Validators.required),
  price: new FormControl('', Validators.required),
  unit_id: new FormControl('', Validators.required),
  unit_sale_id: new FormControl('', Validators.required),
  tax_method: new FormControl('', Validators.required),
  image: new FormControl('', Validators.required)
})
}

ngOnInit(): void {
}

UppProduct(){
this.submitted = true;
if(this.productupdate.valid){
  

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

  //this.product.UppProduct(this.productupdate.value).subscribe(observer);
   
}
}
}
