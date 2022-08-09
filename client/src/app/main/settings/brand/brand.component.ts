import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { AddbrandService } from 'app/auth/service/addbrand.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  public pageBasicText = 3;
  data:any={}
  createbrand:FormGroup;
  constructor(private modalService: NgbModal ,private brand:AddbrandService,public _router:Router ) {
    this.createbrand = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)
    })
      
   }
  openModal(contentModal) {
    this.modalService.open(contentModal);
    }
  ngOnInit(): void {
    this.AllData();
  }
 
  AllData(){
    this.brand.allbrand().subscribe(res=>{
      this.data=res;
    })
  }

  AddBrand(){
    if(this.createbrand.valid){
      console.log(this.createbrand.value)
      this.brand.AddBrand(this.createbrand.value).subscribe(res=>{this.AllData();})
       
    }
  }

  deleteBrand(id:any){
    console.log(id);
    this.brand.deleteBrand(id).subscribe(res=>{
    this.AllData();
    })
  }
}
