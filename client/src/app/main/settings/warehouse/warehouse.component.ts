import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  openModal(contentModal) {
    this.modalService.open(contentModal);
    }
  ngOnInit(): void {
  }

}
