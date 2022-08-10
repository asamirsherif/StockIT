import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddproductService } from 'app/auth/service/addproduct.service';
@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.scss']
})
export class CreateproductComponent implements OnInit {
  public pageBasicText = 3;

  submitted = false;
  
  data:any={}

  errors:any = {};

  createproduct:FormGroup;
  constructor(private fb:FormBuilder,private product:AddproductService,public _router:Router) {
    this.createproduct = new FormGroup({
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
  
  AddProduct(){
    this.submitted = true;
    if(this.createproduct.valid){
      

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

      this.product.AddProduct(this.createproduct.value).subscribe(observer);
       
    }
  }
}
