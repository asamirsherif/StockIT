import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchaseslist',
  templateUrl: './purchaseslist.component.html',
  styleUrls: ['./purchaseslist.component.scss']
})
export class PurchaseslistComponent implements OnInit {
  public pageBasicText = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
