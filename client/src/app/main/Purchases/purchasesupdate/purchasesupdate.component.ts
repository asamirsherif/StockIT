import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductSearchService } from 'app/auth/service/purchase/product-search.service';
import { PurchaseService } from 'app/auth/service/purchase/purchase.service';
import { SupplierservService } from 'app/auth/service/supplier/supplierserv.service';
import { WarehousservService } from 'app/auth/service/warehous/warehousserv.service';
import { IProduct } from 'app/interfaces/iproduct';
import { IPurchase } from 'app/interfaces/ipurchase';
import { IPurchaseDetails } from 'app/interfaces/ipurchase-details';
import { Isupplier } from 'app/interfaces/isupplier';
import { Warehous } from 'app/interfaces/warehous';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-purchasesupdate',
  templateUrl: './purchasesupdate.component.html',
  styleUrls: ['./purchasesupdate.component.scss']
})
export class PurchasesupdateComponent implements OnInit {
  //my vars
  public searchInput = "";
  public errors: any = {};
  public submitted: boolean = false;
  public id=0;

  // for calc
  orderTax: number = 0;
  discount: number = 0;
  shipping: number = 0;
  total: number = 0;
  grandTotal: number = 0;

  //for touchspin bug
  wannaPass: boolean = false;

  //for view
  public purchase: IPurchase;

  //for listing
  public warehouses: Warehous[];
  public suppliers: Isupplier[];
  public products: IProduct[];
  public purchDetails: IPurchaseDetails[] = [];

  //form
  public editPurchForm: FormGroup;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _route: Router,
    private _purchaseService: PurchaseService,
    private _productSearchService: ProductSearchService,
    private _warehouseService: WarehousservService,
    private _supplierService: SupplierservService,
    private _toastr:ToastrService,
  ) {
    this.editPurchForm = new FormGroup({
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
    this.getSuppliers();
    this.getWarehouses();
    this.id = +this._activatedRoute.snapshot.paramMap.get('id');
    this.edit(this.id)
  }

  //////////////////// prepare product , warehoues and suppliers ////////////////////
  getWarehouses() {
    this._warehouseService.allware().subscribe({
      next: (res) => { this.warehouses = res.data }
    })
  }
  getSuppliers() {
    this._supplierService.allSupplier().subscribe({
      next: (res) => { this.suppliers = res.data }
    })
  }

  ///////////////////////////////////////////////////////////////////////////////////

  // get purchase
  edit(id) {
    const observer = {
      next: (res) => {
        this.purchase = res.data
        this.purchDetails = res.data.purchaseDetails
        this.editPurchForm.get('date').setValue(this.purchase.date)
        this.editPurchForm.get('tax_rate').setValue(this.purchase.TaxNet)
        this.editPurchForm.get('discount').setValue(this.purchase.discount)
        this.editPurchForm.get('shipping').setValue(this.purchase.shipping)
        this.editPurchForm.get('notes').setValue(this.purchase.notes)
        this.editPurchForm.get('warehouse_id').setValue(this.purchase.warehouse.id)
        this.editPurchForm.get('supplier_id').setValue(this.purchase.provider.id)

        console.log(this.purchase);
        
        this.countTotal()
        this.countGrandTotal()
      }
    }
    this._purchaseService.show(id).subscribe(observer);
  }


  // update purch
  updatePurch() {
    this.submitted = true;
    
    //if no product in purchase
    if (this.purchDetails.length == 0) {
      this._toastr.error("please choase product!", 'Error')
      return;
    }

    //if valid
    if (this.editPurchForm.valid && this.wannaPass) {
      const formData = this.editPurchForm.value;
      const user = JSON.parse(localStorage.getItem(`currentUser`))
      const data: IPurchase = {
        date: formData.date,
        discount: formData.discount,
        notes: formData.notes,
        shipping: formData.shipping,
        status: formData.status,
        GrandTotal: this.grandTotal,
        paid_amount: 313,
        warehouse_id: formData.warehouse_id,
        provider_id: formData.supplier_id,
        user_id: user.id,
        purchaseDetails: this.purchDetails,
      }

      const observer = {
        next: (res) => {
          this._toastr.success('New purchase has been added');
          //reset all
          this.purchDetails = []
          this.editPurchForm.reset()
          this.countGrandTotal()
        },
        error: (err) => {
          this.errors = err.error.errors;
          this._toastr.error('Make sure for your data!');
        }
      }
      this._purchaseService.update(this.id,data).subscribe(observer);

    }
  }
  //////////////////////////////////////////////////////////////////////////////////////

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
      let indexOfProduct = this.purchDetails.findIndex((val) => val.product.id == this.products[i].id) //find it
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
    this.orderTax = (this.total / 100) * this.editPurchForm.value.tax_rate;
  }
  countDiscount() {
    this.discount = this.editPurchForm.value.discount
  }
  countShipping() {
    this.shipping = this.editPurchForm.value.shipping
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



  //for touchspin bug
  passMe() {
    this.wannaPass = true;
    
  }

}
