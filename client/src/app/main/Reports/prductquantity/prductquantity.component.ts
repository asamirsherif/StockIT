import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'app/auth/service/reports/reports.service';

@Component({
  selector: 'app-prductquantity',
  templateUrl: './prductquantity.component.html',
  styleUrls: ['./prductquantity.component.scss']
})
export class PrductquantityComponent implements OnInit {
  public pageBasicText = 3;

  //for listing
  public productsAlert;
  public quantitiesAlert;

  constructor(
    private _reportsService: ReportsService,
  ) { }

  ngOnInit(): void {
    this.getQuantitiesAlert();
    this.getProductsAlert();
  }

  getProductsAlert() {
    this._reportsService.productAlert().subscribe({
      next: res => {
        this.productsAlert = res.products.data
        console.log(res);
        
      }
    })
  }

  getQuantitiesAlert() {
    this._reportsService.quantityAlert().subscribe({
      next: res => {
        this.quantitiesAlert = res
        console.log(res);
      }
    })
  }
}
