import { Component, ElementRef, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
Chart.register(...registerables)
@Component({
  selector: 'app-profit-and-loss',
  templateUrl: './profit-and-loss.component.html',
  styleUrls: ['./profit-and-loss.component.scss']
})

export class ProfitAndLossComponent implements OnInit {

  constructor(private _elementRef: ElementRef) { }

  ngOnInit(): void {
    let chartDiv = this._elementRef.nativeElement.querySelector('#pieChart')
    this.initCharts(chartDiv)
  }
  private initCharts = (ctx: any): void => {

    const MyChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['done', 'skipped', 'pending', 'canceled'],
        datasets: [{
          label: 'reports',
          data: [12323, 21312, 3213, 2312],
          backgroundColor: ["#e74c3c", "#4C76E1", "#F76E11", "#FFBC80"],
          borderWidth: 1,
          borderColor: '#fff'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'reports'
          }
        },
      }
    });
  }
}
