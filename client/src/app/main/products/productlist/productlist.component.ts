import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'app/auth/service/products/product.service';
import { IProduct } from 'app/interfaces/iproduct';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  public pageBasicText = 3;
  products:IProduct;
  searchInput = "";
  p: number = 1;
    total: number = 0;
  constructor(private _productService:ProductService,private _activeRouter:ActivatedRoute) { }



  ngOnInit(): void {
    this.getAllProducts()
  }



  getAllProducts(){ 
    const reserved = {
        next: (res) =>{
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

}
