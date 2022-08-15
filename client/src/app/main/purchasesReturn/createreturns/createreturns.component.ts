import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createreturns',
  templateUrl: './createreturns.component.html',
  styleUrls: ['./createreturns.component.scss']
})
export class CreatereturnsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  countChange(value) {
    // this.dateValue = value;
    console.log(value);
  }
}
