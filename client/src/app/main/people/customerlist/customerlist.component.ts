import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
selector: 'app-customerlist',
templateUrl: './customerlist.component.html',
styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {

constructor(private modalService: NgbModal) { }
openModal(contentModal) {
this.modalService.open(contentModal);
}
ngOnInit(): void {
}

}
