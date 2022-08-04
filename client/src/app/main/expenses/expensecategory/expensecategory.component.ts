import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-expensecategory',
  templateUrl: './expensecategory.component.html',
  styleUrls: ['./expensecategory.component.scss']
})
export class ExpensecategoryComponent implements OnInit {
  createcategory:FormGroup;
  constructor(private modalService: NgbModal,private fb:FormBuilder) {
    this.createcategory = new FormGroup({
      CategoryName: new FormControl('', Validators.required)
    })
   }
   openModal(contentModal) {
    this.modalService.open(contentModal);}

  ngOnInit(): void {
  }
  formSubmit() {
    console.log(this.createcategory);
  } 
 
}

