import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductSearchService } from 'app/auth/service/purchase/product-search.service';
import { PurchaseService } from 'app/auth/service/purchase/purchase.service';
import { SupplierservService } from 'app/auth/service/supplier/supplierserv.service';
import { WarehousservService } from 'app/auth/service/warehous/warehousserv.service';
import { IProduct } from 'app/interfaces/iproduct';
import { IPurchase } from 'app/interfaces/ipurchase';
import { IPurchaseDetails } from 'app/interfaces/ipurchase-details';
import { Isupplier } from 'app/interfaces/isupplier';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-createpurchases',
  templateUrl: './createpurchases.component.html',
  styleUrls: ['./createpurchases.component.scss']
})
export class CreatepurchasesComponent implements OnInit {
  //my vars
  searchInput = "";
  submitted: boolean = false;
  errors: any = {};
  orderTax: number = 0;
  discount: number = 0;
  shipping: number = 0;
  total: number = 0;
  grandTotal: number = 0;

  //for touchspin bug
  wannaPass: boolean = false;


  //for listing
  warehouses: Array<any>;
  suppliers: Isupplier[];
  products: IProduct[];
  purchDetails: IPurchaseDetails[] = [];

  //form
  createPurchForm: FormGroup;

  constructor(
    private _warehouseService: WarehousservService,
    private _supplierService: SupplierservService,
    private _productSearchService: ProductSearchService,
    private _toastr: ToastrService,
    private _purchaseService: PurchaseService,
  ) {
    this.createPurchForm = new FormGroup({
      date: new FormControl("", Validators.required),
      supplier_id: new FormControl(null, Validators.required),
      warehouse_id: new FormControl(null, Validators.required),
      shipping: new FormControl(0),
      tax_rate: new FormControl(0),
      discount: new FormControl(0),
      status: new FormControl("PAID"),
      notes: new FormControl(""),
    })
  }

  ngOnInit(): void {
    //get all warehouses
    this._warehouseService.allware().subscribe({
      next: (res) => { this.warehouses = res.data }
    })

    //get all supplies
    this._supplierService.allSupplier().subscribe({
      next: (res) => { this.suppliers = res.data }
    })

  }


  //// search from search service 
  purchaseSearch(event) {
    this._productSearchService.purchaseSearch(event).subscribe({
      next: (res) => {
        this.products = res.data;
      }
    });


  }

  //////////////////// search products for purchase warehouse ///////////////////////

  // add new purchase detail from search input
  addPurchDetail(i) {
    //if purchase detail not exist then prepare it and push to purchDetails Array
    if (!this.checkProductExist(this.purchDetails, this.products[i])) {
      let purchDetail: IPurchaseDetails = {
        product_id: this.products[i].id,
        quantity: 1,
        purchase_unit_id: this.products[i].unitPurchase.id,
        cost: this.products[i].total_cost,
        total: this.countSubTotal(1, this.products[i].tax_cost, this.products[i].cost),
        TaxNet: this.products[i].tax_percent,
        tax_method: this.products[i].tax_method,
        product: this.products[i]
      }

      //push to Purchase details
      this.purchDetails.push(purchDetail)

      //if it already exist then only ++ quantity
    } else {
      let indexOfProduct = this.purchDetails.findIndex((val) => val.product === this.products[i]) //find it
      let purchDD = this.purchDetails[indexOfProduct]; // carry it
      purchDD.quantity++; // increase qunatity
      purchDD.total = this.countSubTotal(purchDD.quantity, purchDD.product.tax_cost, purchDD.product.cost) //then count new total for puarchase

    }

    // count totals for preview
    this.countTotal()
    this.countGrandTotal()


  }

  // remove purchase detail from Array with index from table
  removePurchDetail(i) {
    this.purchDetails.splice(i, 1);

    // count totals for preview
    this.countTotal()
    this.countGrandTotal()

  }

  checkProductExist(productList: Array<any>, product: any) {
    return productList.find((val) => {
      return val.product.id === product.id;
    })
  }

  /////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////   counts /////////////////////////////////////////
  countChange(value, i) {
    this.purchDetails[i].quantity = value
    this.purchDetails[i].total = this.countSubTotal(this.purchDetails[i].quantity, this.purchDetails[i].product.tax_cost, this.purchDetails[i].product.cost)
    this.countTotal()
    this.countGrandTotal()

  }
  countTax(quantity: number, tax_cost: number) {
    return quantity * tax_cost
  }
  countSubTotal(quantity: number, tax_cost: number, cost: number) {
    return (quantity * cost) + this.countTax(quantity, tax_cost)
  }
  countOrderTax() {
    this.orderTax = (this.total / 100) * this.createPurchForm.value.tax_rate;
  }
  countDiscount() {
    this.discount = this.createPurchForm.value.discount
  }
  countShipping() {
    this.shipping = this.createPurchForm.value.shipping
  }
  countGrandTotal() {
    this.grandTotal = +this.total + +this.orderTax + +this.shipping - +this.discount;

  }
  //called in every opration
  countTotal() {
    this.total = 0
    this.purchDetails.forEach(element => {
      this.total += element.total;
    });
    this.countOrderTax()
    this.countDiscount()
    this.countShipping()
  }
  /////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////      store Purchase     /////////////////////////////////
  storePurch() {
    this.submitted = true;
    //if no product in purchase
    if (this.purchDetails.length == 0) {
      this._toastr.error("please choase product!", 'Error')
      return;
    }

    //if valid
    if (this.createPurchForm.valid && this.wannaPass) {
      const formData = this.createPurchForm.value;
      const user = JSON.parse(localStorage.getItem(`currentUser`))
      const data: IPurchase = {
        date: formData.date,
        discount: formData.discount,
        tax_rate: formData.tax_rate,
        notes: formData.notes,
        shipping: formData.shipping,
        status: formData.status,
        GrandTotal: this.grandTotal,
        paid_amount: 0,
        warehouse_id: formData.warehouse_id,
        provider_id: formData.supplier_id,
        user_id: user.id,
        purchaseDetails: this.purchDetails,
      }

      console.log(data);


      const observer = {
        next: (res) => {
          this._toastr.success('New purchase has been added');
          //reset all
          this.purchDetails = []
          this.createPurchForm.reset()
          this.countGrandTotal()
        },
        error: (err) => {
          this.errors = err.error.errors;
          this._toastr.error('Make sure for your data!');
        }
      }
      this._purchaseService.store(data).subscribe(observer);

    }
  }




  //for touchspin bug
  passMe() {
    this.wannaPass = true;
  }


}
