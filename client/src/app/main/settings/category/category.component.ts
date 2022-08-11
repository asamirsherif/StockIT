import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public pageBasicText = 3;
  createcategory:FormGroup;
  constructor(private modalService: NgbModal ,private fb:FormBuilder) {
    this.createcategory = new FormGroup({
      CategoryCode: new FormControl('', Validators.required),
      CategoryName: new FormControl('', Validators.required)})
   }
  openModal(contentModal) {
    this.modalService.open(contentModal);
    }
  openModal2(contentModal2) {
      this.modalService.open(contentModal2);
      }  
  ngOnInit(): void {
  }
  formSubmit() {
    console.log(this.createcategory);
  } 

}
