import { Iadjustment } from 'app/interfaces/iadjustment';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WarehousservService } from 'app/auth/service/warehous/warehousserv.service';
import { AdjustmentservService } from 'app/auth/service/adjustment/adjustmentserv.service';
import { Warehous } from 'app/interfaces/warehous';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-listadjustment',
  templateUrl: './listadjustment.component.html',
  styleUrls: ['./listadjustment.component.scss']
})
export class ListadjustmentComponent implements OnInit {
  public pageBasicText = 3;
  searchInput: any;
  adjustments: Iadjustment[];
  warehouses: Warehous[] = [];
  adjustmentForShow!: Iadjustment;
  errors: any = {};

 //for pagination 
 p: number = 1;
 total: number = 0;


  //filter form
  public filterForm:FormGroup;
  constructor(
    private modalService: NgbModal,
    private _warehouseService: WarehousservService,
    private _adjustmentService: AdjustmentservService,
    private _toastr:ToastrService,
  ) { 
    this.filterForm = new FormGroup({
      date:new FormControl(""),
      warehouse_id:new FormControl(""),
      ref: new FormControl(""),
    })
  }

  ngOnInit(): void {
    this.getall();
    this._warehouseService.allware().subscribe({
      next: (res) => {
        this.warehouses = res.data;
      }
    });
  }


  openModal(contentModal) {
    this.modalService.open(contentModal, { centered: true, size: 'lg' })

  }

  ////////////////////////////////// get all adjustment ///////////////
  getall() {
    //then
    const observer = {
      next: (res) => {
        this.adjustments = res.data.adjustments
      }
    }

    //first
    this._adjustmentService.getall().subscribe(observer)
  }


  /////////////////////////////////// delete adjustment /////////////////
  destroy(i: number) {
    //then
    const observer = {
      next: (res) => {
          this.adjustments.splice(i,1);
          this._toastr.success("Adjustment Deleted sucssfully")
      },
      error: (error) => {
        this._toastr.success("something wrong with Adjustment Delete")
      }
    }
    //first
    this._adjustmentService.destroy(this.adjustments[i].id).subscribe(observer)

  }


  ///////////////////////////////// serach //////////////////////
  search(event) {
    this._adjustmentService.params = this._adjustmentService.params.set("search", event)
    this.getall()
  }

  /////////////////////////////// filter ///////////////////////
  filter() {
    if (this.filterForm.valid) {
      let formData = this.filterForm.value;
      this._adjustmentService.params = this._adjustmentService.params.set('date', formData.date)
        .set('ref', formData.ref)
        .set('warehouse_id', formData.warehouse_id)
        //.set('user_id', this.user.id)

        console.log('here');
        

      this.getall();
    }
  }
   // reset filter
   resetFilter() {
    this.filterForm.reset();
    // set init valus for form
    this.filterForm = new FormGroup({
      date: new FormControl(""),
      ref: new FormControl(""),
      warehouse_id: new FormControl(""),
    })
  }

  ////////////////////////////// show adjustment/////////////////////
  ShowAdjustment(i: number) {
    const observer = {
      next: (res) => {
        this.adjustmentForShow = res.data
      },
      error: (err) => {
        this.errors = err.error.errros;
      }
    }
    this._adjustmentService.getAddjuestid(this.adjustments[i].id).subscribe(observer);
  }

  //for pagination
  pageChangeEvent(event: number) {
    this.p = event;
    this.getall();
  }
}
