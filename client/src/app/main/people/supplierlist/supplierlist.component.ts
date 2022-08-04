import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-supplierlist',
  templateUrl: './supplierlist.component.html',
  styleUrls: ['./supplierlist.component.scss']
})
export class SupplierlistComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  openModal(contentModal) {
    this.modalService.open(contentModal);
    }
  ngOnInit(): void {
  }

}
