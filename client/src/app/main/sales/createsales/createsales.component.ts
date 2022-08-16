import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { Router } from "@angular/router";
import { SaleService } from "app/auth/service/sale/sale.service";
import { Component, OnInit } from '@angular/core';
import { WarehousservService } from 'app/auth/service/warehous/warehousserv.service';
import { ISale } from 'app/interfaces/isale';

@Component({
  selector: 'app-createsales',
  templateUrl: './createsales.component.html',
  styleUrls: ['./createsales.component.scss']
})
export class CreatesalesComponent implements OnInit {
  public pageBasicText = 3;

  submitted = false;

  data: any = {};

  errors: any = {};

  createSaleForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private saleService: SaleService,
    public _router: Router
  ) {
    this.createSaleForm = new FormGroup({
      date: new FormControl("", Validators.required),
      code: new FormControl("", Validators.required),
      status: new FormControl("", Validators.required),
      client_id: new FormControl("", Validators.required),
      warehouse_name: new FormControl("", Validators.required),
      shipping: new FormControl("", Validators.required),
      discount: new FormControl("", Validators.required),
      // unit_id: new FormControl("", Validators.required),
      // unit_sale_id: new FormControl("", Validators.required),
      // tax_method: new FormControl("", Validators.required),
      // image: new FormControl(null),
    });
  }

  ngOnInit(): void {
  }

  AddSale() {
    this.submitted = true;
    if (this.createSaleForm.valid) {
      const observer = {
        next: (result) => {
          console.log(result, "asdasd");
        },
        error: (error) => {
          // console.log("error occured", error)
          this.errors = error;
          console.log(this.errors.errors);
        },
      };

      this.saleService
        .store(this.createSaleForm.value)
        .subscribe(observer);
    }
  }

}
