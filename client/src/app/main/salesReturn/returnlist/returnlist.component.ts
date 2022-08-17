import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SaleReturnService } from "app/auth/service/sales-retuen/salesReturn.service";
import { ISaleReturn } from 'app/interfaces/isales-return';

@Component({
  selector: 'app-returnlist',
  templateUrl: './returnlist.component.html',
  styleUrls: ['./returnlist.component.scss']
})
export class ReturnlistComponent implements OnInit {
  public pageBasicText = 3;

  salesReturn:ISaleReturn;
  constructor(
    private _saleReturnService:SaleReturnService,
    private _activeRouter:ActivatedRoute
    ) { }


  ngOnInit(): void {
    this.getAllSalesReturn()
  }



  getAllSalesReturn(){ 
    const reserved = {
        next: (res) =>{
          this.salesReturn = res.data;
          console.log(this.salesReturn)
        }
    }
    this._saleReturnService.getAllSalesReturn().subscribe(reserved)
  }
}


