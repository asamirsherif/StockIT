import { Component, OnInit, ElementRef } from '@angular/core'
import { ReportsService } from 'app/auth/service/reports/reports.service';
import { WarehousservService } from 'app/auth/service/warehous/warehousserv.service';
import { Warehous } from 'app/interfaces/warehous';
import { Chart, registerables } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
Chart.register(...registerables)

@Component({
  selector: 'app-warehouse-report',
  templateUrl: './warehouse-report.component.html',
  styleUrls: ['./warehouse-report.component.scss']
})
export class WarehouseReportComponent implements OnInit {

  //for listing
  public warehouses: Warehous[];
  public warehouse_id: number = 0;
  public warehouseStockArray; public expenseWarehouseArray; public saleWarehouseArray;


  constructor
    (
      private _elementRef: ElementRef,
      private _reportsService: ReportsService,
      private _toastr: ToastrService,
      private _warehouseService: WarehousservService,
  ) { }

  ngOnInit(): void {
    // let chartDiv = this._elementRef.nativeElement.querySelector('#pieChart')
    // this.initCharts(chartDiv)
    // let chartDiv2 = this._elementRef.nativeElement.querySelector('#pieChart2')
    // this.initCharts2(chartDiv2)

    //get warehouses
    this._warehouseService.allware().subscribe({ next: res => { this.warehouses = res.data } })

    //
    this.changeWarehouse()
  }
  // private initCharts = (ctx: any): void => {

  //   const MyChart = new Chart(ctx, {
  //     type: 'pie',
  //     data: {
  //       labels: ['الرئيسي'],
  //       datasets: [{
  //         label: 'Total Items & Quantity',
  //         data: [2312],
  //         backgroundColor: ["#772cee"],
  //         borderWidth: 1,
  //         borderColor: '#fff'
  //       }]
  //     },
  //     options: {
  //       responsive: true,
  //       plugins: {
  //         title: {
  //           display: true,
  //           text: 'Total Items & Quantity'
  //         }
  //       },
  //     }
  //   });
  // }
  // private initCharts2 = (ctx: any): void => {

  //   const MyChart = new Chart(ctx, {
  //     type: 'pie',
  //     data: {
  //       labels: ['الرئيسي'],
  //       datasets: [{
  //         label: 'Value by Cost and Price',
  //         data: [2312],
  //         backgroundColor: ["#772cee"],
  //         borderWidth: 1,
  //         borderColor: '#fff'
  //       }]
  //     },
  //     options: {
  //       responsive: true,
  //       plugins: {
  //         title: {
  //           display: true,
  //           text: 'Value by Cost and Price'
  //         }
  //       },
  //     }
  //   });
  // }


  //chnage warehouse
  changeWarehouse() {
    if (this.warehouse_id == 0)
      this._reportsService.params = this._reportsService.params.delete('warehouse_id');
    else
      this._reportsService.params = this._reportsService.params.set('warehouse_id', this.warehouse_id);


    this.warehouseStock();
    this.expenseWarehouse();
    this.salesWarehouse();

  }

  ///////////////////// warehouses reports
  warehouseStock() {
    this._reportsService.warehouseStock().subscribe({
      next: res => { this.warehouseStockArray = res }
    })
  }
  expenseWarehouse() {
    this._reportsService.expenseWarehouse().subscribe({
      next: res => { this.expenseWarehouseArray = res }
    })
  }
  salesWarehouse() {
    this._reportsService.salesWarehouse().subscribe({
      next: res => { this.saleWarehouseArray = res }
    })
  }
}
