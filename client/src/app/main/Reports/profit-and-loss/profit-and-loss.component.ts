import { Component, ElementRef, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
Chart.register(...registerables)
@Component({
  selector: 'app-profit-and-loss',
  templateUrl: './profit-and-loss.component.html',
  styleUrls: ['./profit-and-loss.component.scss']
})

export class ProfitAndLossComponent implements OnInit {
  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  constructor(private _elementRef: ElementRef,private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) { 
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) &&
        date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) { return this.toDate && date.after(this.fromDate) && date.before(this.toDate); }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) ||
        this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
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
}
