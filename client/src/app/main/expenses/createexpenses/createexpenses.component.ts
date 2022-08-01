import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-createexpenses',
  templateUrl: './createexpenses.component.html',
  styleUrls: ['./createexpenses.component.scss']
})
export class CreateexpensesComponent implements OnInit {
  createexpence:FormGroup;
  constructor(private fb:FormBuilder) {
    this.createexpence = new FormGroup({
      amount: new FormControl('', Validators.required),
      note: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }
  formSubmit() {
    console.log(this.createexpence);
  }
}
