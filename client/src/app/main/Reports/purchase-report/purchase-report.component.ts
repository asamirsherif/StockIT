import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-report',
  templateUrl: './purchase-report.component.html',
  styleUrls: ['./purchase-report.component.scss']
})
export class PurchaseReportComponent implements OnInit {
  public pageBasicText = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
