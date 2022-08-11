import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expensecategory',
  templateUrl: './expensecategory.component.html',
  styleUrls: ['./expensecategory.component.scss']
})
export class ExpensecategoryComponent implements OnInit {
  public pageBasicText = 3;

  submitted = false;
  
  data:any={}

  errors:any = {};
  createcategory:FormGroup;
  constructor(private modalService: NgbModal,private fb:FormBuilder,public _router:Router) {
    this.createcategory = new FormGroup({
      name: new FormControl('', Validators.required)
    })
   }
   formSubmit(){
    this.submitted = true;
    if(this.createcategory.valid){
      
  
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
  
      //this.product.formSubmit(this.createcategory.value).subscribe(observer);
       
    }
  }
   openModal(contentModal) {
    this.modalService.open(contentModal);}
    openModal2(contentModal2) {
      this.modalService.open(contentModal2);}
  ngOnInit(): void {
  }
  
 
}

