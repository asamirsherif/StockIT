import { Iadjustment } from 'app/interfaces/iadjustment';
import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { WarehousservService } from 'app/auth/service/warehous/warehousserv.service';
import { AdjustmentservService } from 'app/auth/service/adjustment/adjustmentserv.service';
@Component({
  selector: 'app-listadjustment',
  templateUrl: './listadjustment.component.html',
  styleUrls: ['./listadjustment.component.scss']
})
export class ListadjustmentComponent implements OnInit {
  public pageBasicText = 3;
  searchInput:any;
  adjustment:Iadjustment[];
  WarehousArray: any[] = [];
  adjustmentForShow!: Iadjustment;
  errors:any=[];
  constructor(private modalService: NgbModal, public wareser: WarehousservService, private adjustmentser: AdjustmentservService) { }

  ngOnInit(): void {
    this.getall();
    this.wareser.allware().subscribe(
      (res) => {
        this.WarehousArray = res.data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  openModal(contentModal) {
    this.modalService.open(contentModal,{centered:true,size:'lg'})
    
    }
    getall() {
      //then
      const observer = {
        next: (res) => {
          this.adjustment = res.data.adjustments
          console.log(this.adjustment)
        },
        error: (error) => {
          console.log(error);
  
        }
      }
  
      //first
      this.adjustmentser.getall().subscribe(observer)
    }
  
    
    destroy(id: number) {
      //then
      const observer = {
        next: (res) => {
          console.log(id);
          this.getall();
        },
        error: (error) => {
          console.log(error)
        }
      }
      //first
      this.adjustmentser.destroy(id).subscribe(observer)
  
    }
    search(event) {
      this.adjustmentser.params = this.adjustmentser.params.set("search", event)
      this.getall()
    }
    ShowAdjustment(id: number) {
      const observer = {
          next: (res) => {
              this.adjustmentForShow = res.data
              console.log(res.data)
          },
          error: (err) => {
              this.errors = err.error.errros;
          }
      }
      this.adjustmentser.getAddjuestid(id).subscribe(observer);
  }  
}
