import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { AddbrandService } from 'app/auth/service/addbrand.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
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
  }
  
  AddBrand(){
    if(this.createbrand.valid){
      console.log(this.createbrand.value)
      this.brand.AddBrand(this.createbrand.value).subscribe(
        (res)=> {
          this.brand=res.data
          console.log(res)
        },
        (e)=>{console.log("erorr")},
        ()=>{
          console.log("done");
          this._router.navigate(['brand'])
        }
      )
    }
  }
}
