import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Iadjustment } from 'app/interfaces/iadjustment';
import { WarehousservService } from 'app/auth/service/warehous/warehousserv.service';
import { AdjustmentservService } from 'app/auth/service/adjustment/adjustmentserv.service';
@Component({
  selector: 'app-adjustupdate',
  templateUrl: './adjustupdate.component.html',
  styleUrls: ['./adjustupdate.component.scss']
})
export class AdjustupdateComponent implements OnInit {
  public pageBasicText = 3;
  WarehousArray:any[]=[];
  submitted = false;
  adjuestment:Iadjustment[];
  data:any={}

  errors:any = {};

  editjustmentform:FormGroup;

  constructor(private fb:FormBuilder,public _router:Router,private adjustserv:AdjustmentservService,public activaterout:ActivatedRoute,public wareser:WarehousservService) { 
    this.editjustmentform = new FormGroup({
      warehouse_id: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      notes:new FormControl(null)
  })
  
  }
  countChange(value) {
    // this.dateValue = value;
    console.log(value);
  }
  ngOnInit(): void {
    const id = +this.activaterout.snapshot.paramMap.get('id')
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
        this.editjustmentform.get("warehouse_id").setValue(res.data.warehouse_id)
        this.editjustmentform.get("date").setValue(res.data.date)
        this.editjustmentform.get("notes").setValue(res.data.notes)

      }
    }

    //first
    this.adjustserv.show(id).subscribe(observer)
  }
  update(data:Iadjustment) {
    this.submitted = true;
    if (this.editjustmentform.valid) {
      const observer = {
        next: (res) => {
          console.log(res);
        },
        error: (error) => {
          console.log(error);
        }
      }
      //first
      this.adjustserv.update(this.activaterout.snapshot.params['id'], this.editjustmentform.value).subscribe(observer)
      this._router.navigate(['listadjustment'])

    }
  }
}
