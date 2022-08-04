import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-expensecategory',
  templateUrl: './expensecategory.component.html',
  styleUrls: ['./expensecategory.component.scss']
})
export class ExpensecategoryComponent implements OnInit {

  constructor(private modalService: NgbModal) {
    
   }
   openModal(contentModal) {
    this.modalService.open(contentModal);}

  ngOnInit(): void {
  }
 
}

