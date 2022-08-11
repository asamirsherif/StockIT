import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listadjustment',
  templateUrl: './listadjustment.component.html',
  styleUrls: ['./listadjustment.component.scss']
})
export class ListadjustmentComponent implements OnInit {
  public pageBasicText = 3;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openModal(contentModal) {
    this.modalService.open(contentModal,{centered:true,size:'lg'})
    
    }

}
