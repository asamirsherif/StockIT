import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  public pageBasicText = 3;
  createcurrency:FormGroup;
  constructor(private modalService: NgbModal ,private fb:FormBuilder) { 
    this.createcurrency = new FormGroup({
      CurrencyCode: new FormControl('', Validators.required),
      CurrencyName: new FormControl('', Validators.required),
      Symbol: new FormControl('', Validators.required)})
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
    console.log(this.createcurrency);
  } 

}
