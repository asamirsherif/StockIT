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

  constructor(
    private _productService:ProductService,
    private _activeRouter:ActivatedRoute
    ) { }



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




}
