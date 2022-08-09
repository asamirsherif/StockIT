import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotationslist',
  templateUrl: './quotationslist.component.html',
  styleUrls: ['./quotationslist.component.scss']
})
export class QuotationslistComponent implements OnInit {
  public pageBasicText = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
