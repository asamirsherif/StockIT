import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {
  public pageBasicText = 3;
  createunit:FormGroup;

  constructor(private modalService: NgbModal,private fb:FormBuilder) { 
    this.createunit = new FormGroup({
      NameUnit: new FormControl('', Validators.required),
      ShortName: new FormControl('', Validators.required)
      })
  }
  openModal(contentModal) {
    this.modalService.open(contentModal);
    }

  ngOnInit(): void {
  }
  formSubmit() {
    console.log(this.createunit);
  } 
}
