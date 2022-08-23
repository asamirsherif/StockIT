import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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
  systemsettingForm: FormGroup;
  CurrencyArray: Icurreny[];
  ClientArray: Iclient[];
  WarehousArray: Warehous[];

  setting: Isetting;
  data: any;
  errors: any = {};

  submitted = false;
  constructor(
    private fb: FormBuilder,
    private _toastr: ToastrService,
    public clientserv: ClientservService,
    public currencyserv: CurrencyService,
    public systemserv: SystemsettingService,
    public warehousserv: WarehousservService
  ) {
    this.systemsettingForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      CompanyName: new FormControl('', Validators.required),
      CompanyPhone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
      client_id: new FormControl('', Validators.required),
      currency_id: new FormControl('', Validators.required),
      warehouse_id: new FormControl('', Validators.required),
      image: new FormControl(null),
      CompanyAddress: new FormControl(null),
      footer: new FormControl(null),
      developed_by: new FormControl(null)
    })
  }

  ngOnInit(): void {
    this.getClients()
    this.getWarehouses()
    this.getCurrencies()
    this.getSystemSettings()


  }


  setSystem(id?: number) {
    this.submitted = true;

    if (this.systemsettingForm.valid) {

      const observer = {
        next: (res) => {
          this._toastr.success(' System Setting has been updated');
        },
        error: (error: HttpErrorResponse) => {
          this._toastr.error('Make sure for your data!');
          this.errors = error.error.errors;
        }
      }

      if (id)
        this.systemserv.update(id, this.systemsettingForm.value).subscribe(observer)
      else
        this.systemserv.store(this.systemsettingForm.value).subscribe(observer)

    }

  }

  getSystemSettings() {
    this.systemserv.get().subscribe({
      next: (res) => {
        if (res) {
          this.setting = res['data'];
          this.systemsettingForm.get('currency_id').setValue(this.setting.currency.id);
          this.systemsettingForm.get('warehouse_id').setValue(this.setting.warehouse.id);
          this.systemsettingForm.get('client_id').setValue(this.setting.client.id);
          this.systemsettingForm.get('email').setValue(this.setting.email);
          this.systemsettingForm.get('CompanyName').setValue(this.setting.CompanyName);
          this.systemsettingForm.get('CompanyPhone').setValue(this.setting.CompanyPhone);
          this.systemsettingForm.get('CompanyAddress').setValue(this.setting.CompanyAddress);
          this.systemsettingForm.get('footer').setValue(this.setting.footer);
          this.systemsettingForm.get('developed_by').setValue(this.setting.developed_by);
        }
      }
    })
  }

  getClients() {
    this.clientserv.allClient().subscribe(
      (res) => {
        this.ClientArray = res.data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }


  getWarehouses() {
    this.warehousserv.allware().subscribe(
      (res) => {
        this.WarehousArray = res.data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getCurrencies() {
    this.currencyserv.allcurr().subscribe(
      (res) => {
        this.CurrencyArray = res.data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

}
