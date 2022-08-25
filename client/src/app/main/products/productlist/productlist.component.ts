import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'app/auth/service/products/product.service';
import { IProduct } from 'app/interfaces/iproduct';
import { FormControl, FormGroup } from '@angular/forms';
import { AddbrandService } from 'app/auth/service/addbrand.service';
import { WarehousservService } from 'app/auth/service/warehous/warehousserv.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  public pageBasicText = 3;
  products: IProduct;
  searchInput = "";
  public filterForm: FormGroup;
  public warehouses: any[] = [];
  public brands: any[]=[];

  p: number = 1;
  total: number = 0;
  constructor(private _productService: ProductService, private _activeRouter: ActivatedRoute ,private _addbrandService:AddbrandService , private _warehouseService:WarehousservService) {
    this.filterForm = new FormGroup({
      brand: new FormControl(""),
      ref: new FormControl(""),
      ToWarehouse_id: new FormControl(""),
      FromWarehouse_id: new FormControl(""),
    })
  }



  ngOnInit(): void {
    this.getAllProducts()
    this.getWarehoues()
    this.getBrand()
  }

 // get warehouses and brands
 getWarehoues() {
  this._warehouseService.allware().subscribe({
    next: (res) => {
      this.warehouses = res.data
    }
  })
}

getBrand() {
  this._addbrandService.allbrand().subscribe({
    next: (res) => {
      this.brands = res.data
    }
  })
}

  getAllProducts() {
    const reserved = {
      next: (res) => {
        this.products = res.data;
        console.log(this.products)
      }
    }
    this._productService.get().subscribe(reserved)
  }


  destroy(id: number) {

    const observer = {
      next: (res) => {
        console.log(id);
        this.getAllProducts();
      },
      error: (error) => {
        console.log(error)
      }
    }

    this._productService.destroy(id).subscribe(observer)

  }

  search(event) {
    this._productService.params = this._productService.params.set("search", event)
    this.getAllProducts();
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getAllProducts();
  }


  //filter
  filter() {
    if (this.filterForm.valid) {
      let formData = this.filterForm.value;
      this._productService.params = this._addbrandService.params.set('brand', formData.brand)
        .set('ref', formData.ref)
        .set('FromWarehouse_id', formData.FromWarehouse_id)
        .set('ToWarehouse_id', formData.ToWarehouse_id)
      //.set('user_id', this.user.id)


      this.getAllProducts();
    }
  }

}
