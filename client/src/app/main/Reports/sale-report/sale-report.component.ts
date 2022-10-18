import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'app/auth/service/reports/reports.service';
import { ISale } from 'app/interfaces/isales';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sale-report',
  templateUrl: './sale-report.component.html',
  styleUrls: ['./sale-report.component.scss']
})
export class SaleReportComponent implements OnInit {
  public pageBasicText = 3;

  //for listing
  public sales;
  constructor(
    private _reportsService:ReportsService,
    private _toastr:ToastrService,
  ) { }

  ngOnInit(): void {
    this.getSales();  
  }

  getSales(){
    this._reportsService.sales().subscribe({
      next:res=>{
        console.log(res);
        this.sales = res;
      }
    })
  }

}
