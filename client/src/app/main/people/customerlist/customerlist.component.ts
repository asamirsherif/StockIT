import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';

@Component({
selector: 'app-customerlist',
templateUrl: './customerlist.component.html',
styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {
  public pageBasicText = 3;
    createcustomer:FormGroup;
constructor(private modalService: NgbModal,private fb:FormBuilder) {
    this.createcustomer = new FormGroup({
        CustomerName: new FormControl('', Validators.required),
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
    console.log(this.createcustomer);
  }
}
