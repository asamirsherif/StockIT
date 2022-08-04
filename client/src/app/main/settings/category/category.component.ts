import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  openModal(contentModal) {
    this.modalService.open(contentModal);
    }
  ngOnInit(): void {
  }

}
