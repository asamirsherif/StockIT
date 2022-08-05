import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  createbrand:FormGroup;
  constructor(private modalService: NgbModal ,private fb:FormBuilder ) {
    this.createbrand = new FormGroup({
      BrandName: new FormControl('', Validators.required)})
   }
  openModal(contentModal) {
    this.modalService.open(contentModal);
    }
  ngOnInit(): void {
  }
  formSubmit() {
    console.log(this.createbrand);
  } 
}
