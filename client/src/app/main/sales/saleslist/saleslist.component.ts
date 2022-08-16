import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SaleService } from "app/auth/service/sale/sale.service";
import { ISale } from 'app/interfaces/isale';

@Component({
  selector: 'app-saleslist',
  templateUrl: './saleslist.component.html',
  styleUrls: ['./saleslist.component.scss']
})
export class SaleslistComponent implements OnInit {
  public pageBasicText = 3;

  sales:ISale;
  constructor(
    private _saleService:SaleService,
    private _activeRouter:ActivatedRoute
    ) { }


  ngOnInit(): void {
    this.getAllSales()
  }



  getAllSales(){ 
    const reserved = {
        next: (res) =>{
          this.sales = res.data;
          console.log(this.sales)
        }
    }
    this._saleService.getAllSales().subscribe(reserved)
  }


}
