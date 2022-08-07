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
  createproduct:FormGroup;
  constructor(private fb:FormBuilder,private product:AddproductService,public _router:Router) {
    this.createproduct = new FormGroup({
      productname: new FormControl('', Validators.required),
      productid: new FormControl('', Validators.required),
      productcost: new FormControl('', Validators.required),
      productprice: new FormControl('', Validators.required),
      stockalert: new FormControl('', Validators.required),
      ordertax: new FormControl('', Validators.required)
    })
}

  ngOnInit(): void {
  }
  AddProduct(){
    if(this.createproduct.valid){
      console.log(this.createproduct.value)
      this.product.AddProduct(this.createproduct.value).subscribe(
        (res)=> {
          this.product=res.data
          console.log(res)
        },
        (e)=>{console.log("erorr")},
        ()=>{
          console.log("done");
          this._router.navigate(['productlist'])
        }
      )
    }
  }
}
