import { Component, OnInit } from '@angular/core';
import { ProductSearchService } from 'app/auth/service/purchase/product-search.service';
import { SupplierservService } from 'app/auth/service/supplier/supplierserv.service';
import { WarehousservService } from 'app/auth/service/warehous/warehousserv.service';
import { IProduct } from 'app/interfaces/iproduct';
import { Isupplier } from 'app/interfaces/isupplier';

@Component({
  selector: 'app-createpurchases',
  templateUrl: './createpurchases.component.html',
  styleUrls: ['./createpurchases.component.scss']
})
export class CreatepurchasesComponent implements OnInit {
  //my vars
  searchInput = "";

  //for listing
  warehouses: Array<any>;
  suppliers: Isupplier[];
  products: IProduct[];
  constructor(
    private _warehouseService: WarehousservService,
    private _supplierService: SupplierservService,
    private _productSearchService: ProductSearchService
  ) { }

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

  purchaseSearch(event) {
    this._productSearchService.purchaseSearch(event).subscribe({
      next: (res) => {
        this.products = res.data;
      }
    });

  }

}
