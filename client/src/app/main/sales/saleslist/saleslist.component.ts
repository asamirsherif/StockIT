import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SaleService } from "app/auth/service/sale/sale.service";
import { WarehousservService } from 'app/auth/service/warehous/warehousserv.service';
import { ClientservService } from "app/auth/service/client/clientserv.service";
import { ISale } from 'app/interfaces/isales';
import { Iclient } from 'app/interfaces/iclient';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-saleslist',
  templateUrl: './saleslist.component.html',
  styleUrls: ['./saleslist.component.scss']
})
export class SaleslistComponent implements OnInit {
  
  //spcial 
  private user = JSON.parse(localStorage.getItem('currentUser'))

  //my vars
  public searchInput = "";


  p: number = 1;
  total: number = 0;
  //for listing
  public sales: ISale[] = [];
  public warehouses: any[] = [];
  public clients: Iclient[] = [];

  //for forms
  public filterForm: FormGroup;

  constructor(
    private _toastr: ToastrService,
    private _saleService: SaleService,
    private _warehouseService: WarehousservService,
    private _clientService: ClientservService,
    private modalService: NgbModal,
  ) {
    this.filterForm = new FormGroup({
      date: new FormControl(""),
      Ref: new FormControl(""),
      client: new FormControl(""),
      warehouse_name: new FormControl(""),
    //   status: new FormControl(""),
    //   payment_status: new FormControl(""),

    })
  }

  ngOnInit(): void {
    //bring all data
    this.getAll();
    this.getClients();
    this.getWarehoues();
  }


  // get warehouses and suppliers
  getWarehoues() {
    this._warehouseService.allware().subscribe({
      next: (res) => {
        this.warehouses = res.data
        console.log(this.warehouses);

      }
    })
  }
  getClients() {
    this._clientService.allClient().subscribe({
      next: (res) => {
        this.clients = res.data;
        console.log(this.clients);

      }
    })
  }

  



  /// get all
  getAll() {

    this._saleService.getAll().subscribe({
        next: (res) => {
        this.sales = res.data;
        console.log(this.sales + 'a7a')
        },
        error: (err)=> console.log(err)
      });
  }

  //delete
  delete(index) {
    const observer = {
      next: (res) => {
        this.sales.splice(index, 1);
        this._toastr.success('purchase deleted succesfully');
      },
      error: (err) => {
        this._toastr.error("something wrong!");
      }

    }
    this._saleService.delete(this.sales[index].id).subscribe(observer);
  }

  //search
  search(event) {
    this._saleService.params = this._saleService.params.set('search', event);
    this.getAll()
  }


  //filter
  filter() {
    if (this.filterForm.valid) {
      let formData = this.filterForm.value;
      this._saleService.params = this._clientService.params.set('date', formData.date)
        .set('Ref', formData.Ref)
        // .set('status', formData.status)
        // .set('payment_status', formData.payment_status)
        .set('client', formData.client)
        .set('warehouse_name', formData.warehouse_name)


      this.getAll();
    }
  }

  // reset filter
  resetFilter() {
    this.filterForm.reset();
    // set init valus for form
    this.filterForm = new FormGroup({
      date: new FormControl(""),
      Ref: new FormControl(""),
      client: new FormControl(""),
      warehouse_name: new FormControl(""),
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getAll();
}

modalOpenAD(modalAD) {
  this.modalService.open(modalAD, {
    centered: true,
    size:'sm'
  });
}

}