import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'app/auth/service/products/product.service';
import { IProduct } from 'app/interfaces/iproduct';


@Component({
  selector: 'app-productdetatils',
  templateUrl: './productdetatils.component.html',
  styleUrls: ['./productdetatils.component.scss']
})
export class ProductdetatilsComponent implements OnInit {

  product:IProduct;

  constructor(
    private _productService:ProductService,
    private _activeRouter:ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id  = +this._activeRouter.snapshot.paramMap.get('id');
    this.showProductData(id);
  }

  showProductData(id:number){
    const observed = {
      next: (res) => {
        this.product = res.data;
        console.log(this.product)
      }
    }
    this._productService.show(id).subscribe(observed)
  }

}
