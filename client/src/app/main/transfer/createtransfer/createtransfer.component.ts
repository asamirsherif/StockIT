import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createtransfer',
  templateUrl: './createtransfer.component.html',
  styleUrls: ['./createtransfer.component.scss']
})
export class CreatetransferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  countChange(value) {
    // this.dateValue = value;
    console.log(value);
  }
}
