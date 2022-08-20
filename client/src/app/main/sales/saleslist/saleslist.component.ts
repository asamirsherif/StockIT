import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saleslist',
  templateUrl: './saleslist.component.html',
  styleUrls: ['./saleslist.component.scss']
})
export class SaleslistComponent implements OnInit {
  public pageBasicText = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
