import { Component, OnInit, ElementRef } from '@angular/core'
import { Chart,registerables } from 'chart.js';
Chart.register(...registerables)

@Component({
  selector: 'app-warehouse-report',
  templateUrl: './warehouse-report.component.html',
  styleUrls: ['./warehouse-report.component.scss']
})
export class WarehouseReportComponent implements OnInit {

  constructor(private _elementRef: ElementRef) { }

  ngOnInit(): void {
    let chartDiv = this._elementRef.nativeElement.querySelector('#pieChart')
    this.initCharts(chartDiv)
    let chartDiv2 = this._elementRef.nativeElement.querySelector('#pieChart2')
    this.initCharts2(chartDiv2)
  }
  private initCharts = (ctx: any): void => {

    const MyChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [ 'الرئيسي'],
        datasets: [{
          label: 'Total Items & Quantity',
          data: [ 2312],
          backgroundColor: [ "#772cee"],
          borderWidth: 1,
          borderColor: '#fff'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Total Items & Quantity'
          }
        },
      }
    });
  }
  private initCharts2 = (ctx: any): void => {

    const MyChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [ 'الرئيسي'],
        datasets: [{
          label: 'Value by Cost and Price',
          data: [ 2312],
          backgroundColor: [ "#772cee"],
          borderWidth: 1,
          borderColor: '#fff'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Value by Cost and Price'
          }
        },
      }
    });
  }
}
