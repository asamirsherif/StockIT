import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-transferlist',
  templateUrl: './transferlist.component.html',
  styleUrls: ['./transferlist.component.scss']
})
export class TransferlistComponent implements OnInit {
  public pageBasicText = 3;
  constructor(private modalService: NgbModal ,) { }
  openModal(contentModal) {
    this.modalService.open(contentModal);
    }
  ngOnInit(): void {
  }

}
