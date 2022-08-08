import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { Router,ActivatedRoute } from '@angular/router';
import { AddbrandService } from 'app/auth/service/addbrand.service';
@Component({
  selector: 'app-editbrand',
  templateUrl: './editbrand.component.html',
  styleUrls: ['./editbrand.component.scss']
})
export class EditbrandComponent implements OnInit {
data:any={}
  constructor(public brandserv:AddbrandService,private _route:Router, private _router:ActivatedRoute) { }
  brandEdit(data:any){
    this.brandserv.updateBrand(this._router.snapshot.params['id'],this.data.data).subscribe({
      next:()=>{
        console.log(this.data.data)
        this.brandserv.brandData=this.data.data
        this._route.navigateByUrl('brand')

      }
    })
  }
  
  ngOnInit(): void {
    // this.brandserv.getBrandid(this._router.snapshot.params['id']).subscribe(
    //   (res)=>{ console.log(res)
    //   //  data=>this.data=data
    //   this.data=res
    //   this.brandserv.brandData=res.data
    //   },
    //   (e)=>{this._route.navigateByUrl('brand')},
    //   ()=>{ console.log(this.brandserv)}
    // )
  }
}
