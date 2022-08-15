import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createsales',
  templateUrl: './createsales.component.html',
  styleUrls: ['./createsales.component.scss']
})
export class CreatesalesComponent implements OnInit {

  constructor(public _router:Router) { }

  ngOnInit(): void {
    
  }
  countChange(value) {
    // this.dateValue = value;
    console.log(value);
  }

  
}
