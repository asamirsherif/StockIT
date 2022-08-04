import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  openModal(contentModal) {
    this.modalService.open(contentModal);
    }
  ngOnInit(): void {
  }

}
