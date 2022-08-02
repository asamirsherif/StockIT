import { Component, OnInit, ElementRef } from '@angular/core'
import { Chart,registerables } from 'chart.js';
Chart.register(...registerables)
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _elementRef: ElementRef) {}

  public contentHeader: object

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Home',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Sample',
            isLink: false
          }
        ]
      }
    }
    let chartDiv = this._elementRef.nativeElement.querySelector('#pieChart')
    this.initCharts(chartDiv)
    let chartDiv2 = this._elementRef.nativeElement.querySelector('#pieChart2')
    this.initCharts2(chartDiv2)
  }
  private initCharts = (ctx: any): void => {

    const MyChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['jan', 'feb', 'mar', 'april','mai','jun','jul','oct','sep','oct','nov','dec'],
        datasets: [{
          label: 'Sales',
          data: [ 0,0,4000],
          backgroundColor: ["#DCE2FF"],
          borderWidth: 1,
          borderColor: '#fff'
        },
        {
          label: 'Purchases',
          data: [ 0,0,,0,0,0, 11000],
          backgroundColor: [ "#86899C"],
          borderWidth: 1,
          borderColor: '#fff'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'This Week Sales & Purchases'
          }
        },
      }
    });  
  }
  private initCharts2 = (ctx: any): void => {

    const MyChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['jan', 'feb', 'mar', 'april','mai','jun','jul','oct','sep','oct','nov','dec'],
        datasets: [{
          label: 'Sales',
          data: [ 0,0,4000,0,0,0,8000],
          backgroundColor: ["#DCE2FF"],
          borderWidth: 1,
          borderColor: '#fff'
        },
        {
          label: 'Purchases',
          data: [ 0,0,,0,0,0, 11000],
          backgroundColor: [ "#86899C"],
          borderWidth: 1,
          borderColor: '#fff'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'This Week Sales & Purchases'
          }
        },
      }
    });  
  }
}
