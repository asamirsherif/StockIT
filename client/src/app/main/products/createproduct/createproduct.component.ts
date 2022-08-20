import { IBrand } from 'app/interfaces/ibrand';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "app/auth/service/products/product.service";
import { CategorytService } from "app/auth/service/category/category.service";
import { UnitservService } from "app/auth/service/unit/unitserv.service";
import { AddbrandService } from "app/auth/service/addbrand.service";
import { ICategory } from 'app/interfaces/icategory';
import { Unit } from 'app/interfaces/unit';
import { IProduct } from 'app/interfaces/iproduct';
import { ToastrService } from 'ngx-toastr';

import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: "app-createproduct",
  templateUrl: "./createproduct.component.html",
  styleUrls: ["./createproduct.component.scss"],
})
export class CreateproductComponent implements OnInit {
  public pageBasicText = 3;
  CategoryArray: ICategory[];
  UnitArray: Unit[];
  BrandArray: IBrand[];

  product: IProduct[];

  submitted = false;


  data: any
  errors: any = {};


  createProductForm: FormGroup;
  constructor(private fb: FormBuilder, public _router: Router, public brandserv: AddbrandService, public categoryserv: CategorytService, public unitserv: UnitservService, public productserv: ProductService,    private _toastr: ToastrService,
    ) {
    this.createProductForm = new FormGroup({
      name: new FormControl("", Validators.required),
      code: new FormControl("", Validators.required),
      category_id: new FormControl("", Validators.required),
      type_barcode: new FormControl("", Validators.required),
      cost: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      unit_id: new FormControl("", Validators.required),
      unit_sale_id: new FormControl("", Validators.required),
      unit_purchase_id: new FormControl("", Validators.required),
      tax_method: new FormControl("", Validators.required),
      order_tax: new FormControl(null),
      image: new FormControl(null),
    });
  }

  ngOnInit(): void {

    this.categoryserv.get().subscribe(

      (res) => {

        this.CategoryArray = res.data.categories;

        console.log(this.CategoryArray);
      },

      (err: any) => {

        console.log(err);

      }

    );
    this.brandserv.allbrand().subscribe(

      (res) => {

        this.BrandArray = res.data;

        console.log(this.BrandArray);
      },

      (err: any) => {

        console.log(err);

      }

    );

    const UnitObserver = {
      next: (res) => {
        this.UnitArray = res.data.units
        console.log(this.UnitArray);
      },
      error: (error) => {
        console.log(error);
      }
    }

    this.unitserv.allunit().subscribe(UnitObserver)
  }

  AddProduct() {
    this.submitted = true;

    if (this.createProductForm.valid) {

      const observer = {
        next: (res) => {
          this._toastr.success('New product has been added');
          console.log(res, 'done');
          this._router.navigate(['productlist'])

        },
        error: (error: HttpErrorResponse) => {
          this._toastr.error('Make sure for your data!');
          this.errors = error.error.errors;
        },
      }

      this.productserv.store(this.createProductForm.value).subscribe(observer)
      console.log(this.createProductForm.value);


    }
  }
}
