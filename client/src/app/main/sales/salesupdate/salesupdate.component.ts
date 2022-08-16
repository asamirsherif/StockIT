import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { WarehousservService } from 'app/auth/service/warehous/warehousserv.service';
import { SaleService } from "app/auth/service/sale/sale.service";
import { ISale } from 'app/interfaces/isale';

@Component({
  selector: 'app-salesupdate',
  templateUrl: './salesupdate.component.html',
  styleUrls: ['./salesupdate.component.scss']
})
export class SalesupdateComponent implements OnInit {
  WarehousArray:any[]=[];
  
  public pageBasicText = 3;
  sales:ISale[];
  submitted = false;
  
  data:any={}

  errors:any = {};
  editsale:FormGroup;

  constructor(private fb:FormBuilder,public _router:Router,private saleService:SaleService,public _activateRouter:ActivatedRoute,public wareser:WarehousservService) {

    this.editsale = new FormGroup({
      date: new FormControl('', Validators.required),
      client_id: new FormControl('', Validators.required),
      warehouse_id: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      payment_status: new FormControl('', Validators.required),
      shipping: new FormControl('', Validators.required),
      discount: new FormControl('', Validators.required),
      tax_rate: new FormControl('', Validators.required),
      notes: new FormControl('', Validators.required),
     })
     }

  ngOnInit(): void {
    const id = +this._activateRouter.snapshot.paramMap.get('id')
    this.edit(id);
    console.log(id);


    //get select from database

    this.wareser.allware().subscribe(

      (res) => {

        this.WarehousArray=res.data;

        console.log(this.WarehousArray);
      },

      (err:any) => {

        console.log(err);

      }

    );
    
    }
    
    
    edit(id:number) {
      //then
      const observer = {
        next: (res) => {
          this.editsale.get("date").setValue(res.data.date)
          this.editsale.get("client_id").setValue(res.data.client_id)
          this.editsale.get("warehouse_id").setValue(res.data.warehouse_id)
          this.editsale.get("status").setValue(res.data.status)
          this.editsale.get("payment_status").setValue(res.data.payment_status)
          this.editsale.get("shipping").setValue(res.data.shipping)
          this.editsale.get("discount").setValue(res.data.discount)
          this.editsale.get("tax_rate").setValue(res.data.tax_rate)
          this.editsale.get("notes").setValue(res.data.notes)
  
        }
      }
  
      //first
      this.saleService.show(id).subscribe(observer)
    }
    update(data:ISale) {
      this.submitted = true;
      if (this.editsale.valid) {
        const observer = {
          next: (res) => {
            console.log(res);
          },
          error: (error) => {
            console.log(error);
          }
        }
        //first
        this.saleService.update(this._activateRouter.snapshot.params['id'], this.editsale.value).subscribe(observer)
        this._router.navigate(['saleslist'])
  
      }
    }

}
