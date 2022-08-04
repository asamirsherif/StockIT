import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  openModal(contentModal) {
    this.modalService.open(contentModal);
    }
  ngOnInit(): void {
  }

}
