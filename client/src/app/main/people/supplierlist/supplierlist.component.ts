import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-supplierlist',
  templateUrl: './supplierlist.component.html',
  styleUrls: ['./supplierlist.component.scss']
})
export class SupplierlistComponent implements OnInit {
  public pageBasicText = 3;
  createsuplier:FormGroup;
  constructor(private modalService: NgbModal,private fb:FormBuilder) {
    this.createsuplier = new FormGroup({
      SupplierName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
    })
   }
  openModal(contentModal) {
    this.modalService.open(contentModal);
    }
  ngOnInit(): void {
  }
  formSubmit() {
    console.log(this.createsuplier);
  }
}
