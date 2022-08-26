import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'app/auth/service/reports/reports.service';

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.scss']
})
export class CustomerReportComponent implements OnInit {
  public pageBasicText = 3;

  //for listing
  public customers;

  constructor(
    private _reportsService: ReportsService,
  ) { }

  ngOnInit(): void {
    this.getCustomers();
  }



  getCustomers() {
    this._reportsService.clients().subscribe({
      next: res => {
        this.customers = res;
      }
    })
  }

}
