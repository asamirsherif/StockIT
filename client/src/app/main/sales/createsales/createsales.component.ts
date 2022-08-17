import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { Router } from "@angular/router";
import { SaleSearchService } from 'app/auth/service/sale/sale-search.service';
import { SaleService } from "app/auth/service/sale/sale.service";
import { IProduct } from 'app/interfaces/iproduct';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { WarehousservService } from 'app/auth/service/warehous/warehousserv.service';
import { ISale } from 'app/interfaces/isale';
import { ISaleDetails } from 'app/interfaces/isale-details';
import { ProductSearchService } from 'app/auth/service/purchase/product-search.service';

import { ClientservService } from 'app/auth/service/client/clientserv.service';
@Component({
  selector: 'app-createsales',
  templateUrl: './createsales.component.html',
  styleUrls: ['./createsales.component.scss']
})
export class CreatesalesComponent implements OnInit {


// 
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
sales: ISale[];
salesDetails: ISaleDetails[] = [];
products: IProduct[];


//form
createSaleForm: FormGroup;

WarehousArray: any[] = [];
clientArray: any[] = [];

constructor(
    private _warehouseService: WarehousservService,
    private _clientService: ClientservService,
    private _productSearchService: ProductSearchService,
    private _saleSearchService: SaleSearchService,
    private _toastr: ToastrService,
    private _saleService: SaleService,
  ) {
    this.createSaleForm = new FormGroup({
        date: new FormControl("", Validators.required),
        client: new FormControl(null, Validators.required),
        warehouse_name: new FormControl(null, Validators.required),
        shipping: new FormControl(0),
        tax_rate: new FormControl(0),
        discount: new FormControl(0),
        status: new FormControl("PAID"),
        payment_status: new FormControl("Receivd"),
        notes: new FormControl(""),
      })
  }
  ngOnInit(): void {
    //get all warehouses
    this._warehouseService.allware().subscribe({
      next: (res) => { this.warehouses = res.data }
    })

    //get all supplies
    this._clientService.allClient().subscribe({
      next: (res) => { this.clientArray = res.data }
    })

  }
  salesSearch(event) {
    this._saleSearchService.salesSearch(event).subscribe({
      next: (res) => {
        this.products = res.data;
      }
    });


  }
 
}
