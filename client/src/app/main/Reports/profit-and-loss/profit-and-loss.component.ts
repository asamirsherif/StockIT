import { Component, ElementRef, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ReportsService } from 'app/auth/service/reports/reports.service';
Chart.register(...registerables)
@Component({
  selector: 'app-profit-and-loss',
  templateUrl: './profit-and-loss.component.html',
  styleUrls: ['./profit-and-loss.component.scss']
})

export class ProfitAndLossComponent implements OnInit {


  public dateForm: FormGroup;
  public reportsData;

  constructor(
    private _elementRef: ElementRef,
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter,
    private _toastr: ToastrService,
    private _reportsService: ReportsService
  ) {

    this.dateForm = new FormGroup({
      from: new FormControl(null, Validators.required),
      to: new FormControl(null, Validators.required)
    })
  }

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


  getReport() {
    if (!this.dateForm.valid) {
      this._toastr.error('Chouse range please');
      return;
    } else {
      this._reportsService.params = this._reportsService.params.set('from', this.dateForm.value.from)

      this._reportsService.pofitLoss().subscribe({
        next: res => {
          this.reportsData = res.data;
          console.log(this.reportsData)
        }
      })

    }
  }
}
