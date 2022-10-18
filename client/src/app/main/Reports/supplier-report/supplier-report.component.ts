import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'app/auth/service/reports/reports.service';

@Component({
  selector: 'app-supplier-report',
  templateUrl: './supplier-report.component.html',
  styleUrls: ['./supplier-report.component.scss']
})
export class SupplierReportComponent implements OnInit {
  public pageBasicText = 3;

  //for listing 
  public suppliers;
  constructor(
    private _reportsService:ReportsService
  ) { }

  ngOnInit(): void {
    this.getSuppliers();
  }

  getSuppliers(){
    this._reportsService.suppliers().subscribe({
      next:res=>{
        this.suppliers = res.report;
        console.log(res)
      }
    })
  }

}
