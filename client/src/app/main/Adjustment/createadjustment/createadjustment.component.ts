import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdjustmentservService } from 'app/auth/service/adjustment/adjustmentserv.service';
import { WarehousservService } from 'app/auth/service/warehous/warehousserv.service';
import { Iadjustment } from 'app/interfaces/iadjustment';
import { Warehous } from 'app/interfaces/warehous';
import { IProduct } from 'app/interfaces/iproduct';
import { IAdjustmentDetails } from 'app/interfaces/adjustment-details';
import { ProductSearchService } from 'app/auth/service/purchase/product-search.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-createadjustment',
  templateUrl: './createadjustment.component.html',
  styleUrls: ['./createadjustment.component.scss']
})
export class CreateadjustmentComponent implements OnInit {
  //my vars
  public pageBasicText = 3;
  public warehouse_id: number;
  submitted = false;
  errors: any = {};
  public searchInput: String = '';

  // toucspin bug
  private wannaPass = false;


  //for listing
  public warehouses: Warehous[];
  public products: IProduct[];
  public adjDetails: IAdjustmentDetails[];


  // form
  createAdjForm: FormGroup;

  constructor(
    private _router: Router,
    private _toastr: ToastrService,
    private _warehouseService: WarehousservService,
    private _adjustmentService: AdjustmentservService,
    private _productSearchService: ProductSearchService,
  ) {
    this.createAdjForm = new FormGroup({
      warehouse_id: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      notes: new FormControl(null),
      search: new FormControl(null),
    })
  }

  ngOnInit(): void {
    //get warehouses
    this._warehouseService.allware().subscribe({
      next: res => { return this.warehouses = res.data }
    });
  }

  // storing 
  storeAdjustment() {
    this.submitted = true;
    // if no products in details
    if (this.adjDetails.length == 0) {
      this._toastr.error("please choase product!", 'Error')
      return;
    }
    if (this.createAdjForm.valid && this.wannaPass) {
      const user = JSON.parse(localStorage.getItem(`currentUser`))
      const formdata = this.createAdjForm.value;
      const observer = {
        next: (result) => {
          this._toastr.success(result.message)
          this.resetForm()
        },
        error: (error) => {
          this._toastr.error('Something went wrong!');
        }
      }
      let data: Iadjustment = {
        date: formdata.date,
        warehouse_id: formdata.warehouse_id,
        notes: formdata.notes,
        user_id: user.id,
        details: this.adjDetails,
        items: 0
      }

      //first
      this._adjustmentService.store(data).subscribe(observer)
      //this._router.navigate(['listadjustment'])
    }
  }


  //////////////////////// searching ///////////////////
  getWarehouse(event) {
    this.products = [];
    this.adjDetails = [];
  }
  adjSearch(word) {
    if (!this.warehouse_id) this._toastr.error("please choose warehouse");
    else
      this._productSearchService
        .adjSearch(word, this.warehouse_id)
        .subscribe({
          next: (res) => {
            this.products = res.data;
          },
        });
  }
  //////////////////////////////////////////////////////////
  ///////////////////// Adding to adjustment details ///////
  addAdjDetail(i) {
    //if purchase detail not exist then prepare it and push to adjDetails Array
    if (!this.checkProductExist(this.adjDetails, this.products[i])) {
      let adjDetail: IAdjustmentDetails = {
        product_id: this.products[i].id,
        quantity: 1,
        product: this.products[i],
        type: "Subtraction"
      }

      //push to Purchase details
      this.adjDetails.push(adjDetail)

      //if it already exist then only ++ quantity
    } else {
      let indexOfProduct = this.adjDetails.findIndex((val) => val.product.id === this.products[i].id) //find it
      let purchDD = this.adjDetails[indexOfProduct]; // carry it
      purchDD.quantity++; // increase qunatity

    }

  }
  checkProductExist(productList: Array<any>, product: any) {
    return productList.find((val) => {
      return val.product.id === product.id;
    })
  }
  removeAdjDetail(i) {
    this.adjDetails.splice(i, 1);
  }
  changeDetailType(i, type) {
    this.adjDetails[i].type = type;
  }
  //////////////////////////////////////////////////////////////////////////////////
  //////////////////// fot touchspin bug
  passMe() {
    this.wannaPass = true;
  }
  resetForm() {
    this.createAdjForm.reset()
    this.wannaPass = false
  }
  countChange(value, i) {
    this.adjDetails[i].quantity = value
  }
}
