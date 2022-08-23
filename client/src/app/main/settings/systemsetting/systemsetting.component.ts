import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Warehous } from 'app/interfaces/warehous';
import { Iclient } from 'app/interfaces/iclient';
import { Icurreny } from 'app/interfaces/icurreny';
import { WarehousservService } from 'app/auth/service/warehous/warehousserv.service';
import { CurrencyService } from 'app/auth/service/currency/currency.service';
import { ClientservService } from 'app/auth/service/client/clientserv.service';
import { ToastrService } from 'ngx-toastr';
import { Isetting } from 'app/interfaces/isetting';
import { SystemsettingService } from 'app/auth/service/systemsetting/systemsetting.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-systemsetting',
  templateUrl: './systemsetting.component.html',
  styleUrls: ['./systemsetting.component.scss']
})
export class SystemsettingComponent implements OnInit {
  systemsettingForm:FormGroup;
  CurrencyArray:Icurreny[];
  ClientArray:Iclient[];
  WarehousArray:Warehous[];

  setting:Isetting[];
  data:any;
  errors:any={};

  submitted=false;
  constructor(private fb:FormBuilder, private _toastr: ToastrService,public clientserv:ClientservService,public currencyserv:CurrencyService,public systemserv:SystemsettingService,public warehousserv:WarehousservService) {
    this.systemsettingForm = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      name: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
      client_id:new FormControl('',Validators.required),
      currency_id:new FormControl('',Validators.required),
      warehouse_id:new FormControl('',Validators.required),
      image:new FormControl(null),
      address:new FormControl(null)
    })
}

  ngOnInit(): void {
    this.clientserv.allClient().subscribe(

      (res) => {

        this.ClientArray = res.data;

        console.log(this.ClientArray);
      },

      (err: any) => {

        console.log(err);

      }

    );

    this.warehousserv.allware().subscribe(

      (res) => {

        this.WarehousArray = res.data;

        console.log(this.WarehousArray);
      },

      (err: any) => {

        console.log(err);

      }

    );

    this.currencyserv.allcurr().subscribe(

      (res) => {

        this.CurrencyArray = res.data;

        console.log(this.CurrencyArray);
      },

      (err: any) => {

        console.log(err);

      }

    );
  }
  AddSystem(){
    this.submitted = true;

    if (this.systemsettingForm.valid) {

      const observer = {
        next: (res) => {
          this._toastr.success('New System Setting has been added');
          console.log(res, 'done');
        },
        error: (error: HttpErrorResponse) => {
          this._toastr.error('Make sure for your data!');
          this.errors = error.error.errors;
          console.log(this.errors)
        },
      }

      this.systemserv.store(this.systemsettingForm.value).subscribe(observer)
      console.log(this.systemsettingForm.value);


    }
  }
}
