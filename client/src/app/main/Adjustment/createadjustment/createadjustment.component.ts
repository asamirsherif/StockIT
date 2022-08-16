import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdjustmentservService } from 'app/auth/service/adjustment/adjustmentserv.service';
import { WarehousservService } from 'app/auth/service/warehous/warehousserv.service';
import { Iadjustment } from 'app/interfaces/iadjustment';

@Component({
  selector: 'app-createadjustment',
  templateUrl: './createadjustment.component.html',
  styleUrls: ['./createadjustment.component.scss']
})
export class CreateadjustmentComponent implements OnInit {
  public pageBasicText = 3;
  WarehousArray: any[] = [];
  adjuestment: Iadjustment[];
  submitted = false;

  data: any = {}

  errors: any = {};

  createadjustmentform: FormGroup;
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
  constructor(private fb: FormBuilder, public _router: Router, public wareser: WarehousservService, private adjuestmentserv: AdjustmentservService) {
    this.createadjustmentform = new FormGroup({
      warehouse_id: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      notes: new FormControl(null),
      search: new FormControl(null),
    })
  }

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
  }

  AddAdjustment() {
    this.submitted = true;
    if (this.createadjustmentform.valid) {
      const user = JSON.parse(localStorage.getItem(`currentUser`))
      const formdata = this.createadjustmentform.value;
      const observer = {
        next: (result) => {

          console.log(result, 'done');

        },
        error: (error) => {
          console.log(error);
        }
      }
      let data: Iadjustment = {
        date: formdata.date,
        warehouse_id: formdata.warehouse_id,
        notes: formdata.notes,
        id: formdata.id
      }

      //first
      this.adjuestmentserv.store(data).subscribe(observer)
      console.log(data);
      this._router.navigate(['listadjustment'])


    }
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
