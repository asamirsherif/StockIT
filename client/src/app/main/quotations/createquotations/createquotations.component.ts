import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createquotations',
  templateUrl: './createquotations.component.html',
  styleUrls: ['./createquotations.component.scss']
})
export class CreatequotationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  countChange(value) {
    // this.dateValue = value;
    console.log(value);
  }
}
