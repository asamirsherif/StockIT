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

  submitted = false;
  
  data:any={}

  errors:any = {};

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
    openModal2(contentModal2) {
      this.modalService.open(contentModal2);
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
    this.submitted = true;
    if(this.createbrand.valid){
      

      const observer = {
        next: (result) => {
            console.log(result,'asdasd');
        }, 
        error: (error) => {
            // console.log("error occured", error)
            this.errors = error;
            console.log(this.errors.errors);
        }
      }

      this.brand.AddBrand(this.createbrand.value).subscribe(observer);
       
    }
  }

  deleteBrand(id:any){
    console.log(id);
    this.brand.deleteBrand(id).subscribe(res=>{
    this.AllData();
    })
  }
}
