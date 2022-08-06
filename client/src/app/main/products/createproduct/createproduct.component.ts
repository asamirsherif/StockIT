import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.scss']
})
export class CreateproductComponent implements OnInit {
  createproduct:FormGroup;
  constructor(private fb:FormBuilder) {
    this.createproduct = new FormGroup({
      productname: new FormControl('', Validators.required),
      productid: new FormControl('', Validators.required),
      productcost: new FormControl('', Validators.required),
      productprice: new FormControl('', Validators.required),
      stockalert: new FormControl('', Validators.required),
      ordertax: new FormControl('', Validators.required)
    })
}

   

  ngOnInit(): void {
  }
  formSubmit() {
    console.log(this.createproduct);
  }
}
