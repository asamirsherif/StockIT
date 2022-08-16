import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WarehousservService } from 'app/auth/service/warehous/warehousserv.service';

import { ClientservService } from 'app/auth/service/client/clientserv.service';
@Component({
  selector: 'app-createsales',
  templateUrl: './createsales.component.html',
  styleUrls: ['./createsales.component.scss']
})
export class CreatesalesComponent implements OnInit {

  WarehousArray: any[] = [];
  clientArray: any[] = [];


  public searchInput: String = '';
  public searchResult: Array<any> = [];
  public toggle: Boolean = false;
  public selectedInput: Array<any> = [];
  public seriesList: Array<any> = [
    {
      "name": "t-sherit",
      "code": "3",
      "stock": "erkllker"
    },
    {
      "name": "t-hghd",
      "code": "2",
      "stock": "erkllker"
    },
    {
      "name": "t-krk",
      "code": "1",
      "stock": "erkllker"
    }
  ]
  constructor(public _router:Router,public wareser: WarehousservService,public clientService:ClientservService) { }

  ngOnInit(): void {
    this.wareser.allware().subscribe(

      (res) => {

        this.WarehousArray = res.data;

        console.log(this.WarehousArray);
      },

      (err: any) => {

        console.log(err);

      }

    );
    this.clientService.allClient().subscribe(

      (res) => {

        this.clientArray = res.data;

        console.log(this.clientArray);
      },

      (err: any) => {

        console.log(err);

      }

    );
  }
  countChange(value) {
    // this.dateValue = value;
    console.log(value);
  }

  fetchSeries(value: String) {
    if (value === '') {
      return this.searchResult = []
    }

    this.searchResult = this.seriesList.filter(function (series) {
      return series.name.startsWith(value)

    })
    this.toggle = false;
  }

  showDetails(series) {
    console.log(series);
    
    this.selectedInput.push(series) ;
    this.toggle = true;
    this.searchInput = series.name;
  }

  deleteSeris(index){
    this.selectedInput.splice(index,1);
  }

}
