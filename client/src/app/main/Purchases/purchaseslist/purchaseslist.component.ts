import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PurchaseService } from 'app/auth/service/purchase/purchase.service';
import { SupplierservService } from 'app/auth/service/supplier/supplierserv.service';
import { WarehousservService } from 'app/auth/service/warehous/warehousserv.service';
import { IPurchase } from 'app/interfaces/ipurchase';
import { Isupplier } from 'app/interfaces/isupplier';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-purchaseslist',
  templateUrl: './purchaseslist.component.html',
  styleUrls: ['./purchaseslist.component.scss']
})
export class PurchaseslistComponent implements OnInit {

  //spcial 
  private user = JSON.parse(localStorage.getItem('currentUser'))

  //my vars
  public searchInput = "";
  public pageBasicText = 3;


  //for listing
  public purchases: IPurchase[] = [];
  public warehouses: any[] = [];
  public suppliers: Isupplier[] = [];

  //for forms
  public filterForm: FormGroup;

  constructor(
    private _toastr: ToastrService,
    private _purchaseService: PurchaseService,
    private _warehouseService: WarehousservService,
    private _supplierService: SupplierservService,
  ) {
    this.filterForm = new FormGroup({
      date: new FormControl(""),
      ref: new FormControl(""),
      provider_id: new FormControl(""),
      warehouse_id: new FormControl(""),
    })
  }

  ngOnInit(): void {
    //bring all data
    this.getAll();
    this.getSuppliers();
    this.getWarehoues();
  }


  // get warehouses and suppliers
  getWarehoues() {
    this._warehouseService.allware().subscribe({
      next: (res) => {
        this.warehouses = res.data
      }
    })
  }
  getSuppliers() {
    this._supplierService.allSupplier().subscribe({
      next: (res) => {
        this.suppliers = res.data;
      }
    })
  }



  /// get all
  getAll() {
    const observer = {
      next: (res) => {
        this.purchases = res.data.purchases;
        console.log(this.purchases);

      },
      error: (err) => {
        this._toastr.error("something wrong!");
      }
    }
    this._purchaseService.getAll().subscribe(observer);
  }

  //delete
  delete(index) {
    const observer = {
      next: (res) => {
        this.purchases.splice(index, 1);
        this._toastr.success('purchase deleted succesfully');
      },
      error: (err) => {
        this._toastr.error("something wrong!");
      }

    }
    this._purchaseService.delete(this.purchases[index].id).subscribe(observer);
  }

  //search
  search(event) {
    this._purchaseService.params = this._purchaseService.params.set('search', event);
    this.getAll()
  }


  //filter
  filter() {
    if (this.filterForm.valid) {
      let formData = this.filterForm.value;
      this._purchaseService.params = this._supplierService.params.set('date', formData.date)
        .set('ref', formData.ref)
        .set('provider_id', formData.provider_id)
        .set('warehouse_id', formData.warehouse_id)
        //.set('user_id', this.user.id)


      this.getAll();
    }
  }

  // reset filter
  resetFilter() {
    this.filterForm.reset();
    // set init valus for form
    this.filterForm = new FormGroup({
      date: new FormControl(""),
      ref: new FormControl(""),
      provider_id: new FormControl(""),
      warehouse_id: new FormControl(""),
    })
  }

}
