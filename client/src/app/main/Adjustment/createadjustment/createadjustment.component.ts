import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
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
  WarehousArray:any[]=[];
  adjuestment: Iadjustment[];
  submitted = false;
  
  data:any={}

  errors:any = {};

  createadjustmentform:FormGroup;
 
  constructor(private fb:FormBuilder,public _router:Router,public wareser:WarehousservService,private adjuestmentserv:AdjustmentservService) {
    this.createadjustmentform = new FormGroup({
      warehouse_id: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      notes:new FormControl(null)
  })
}

ngOnInit(): void {
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
countChange(value) {
  // this.dateValue = value;
  console.log(value);
}
AddAdjustment(){
  this.submitted = true;
  if(this.createadjustmentform.valid){
    const user = JSON.parse(localStorage.getItem(`currentUser`))
    const formdata = this.createadjustmentform.value;
    const observer = {
      next: (result) => {

          console.log(result,'done');

      }, 
      error: (error) => {
        console.log(error);
      }
    }
    let data: Iadjustment = {
      date: formdata.date,
      warehouse_id:formdata.warehouse_id,
      notes:formdata.notes,
      id:formdata.id
    }

    //first
    this.adjuestmentserv.store(data).subscribe(observer)
console.log(data);
    this._router.navigate(['listadjustment'])
     
  
}   
}
}
