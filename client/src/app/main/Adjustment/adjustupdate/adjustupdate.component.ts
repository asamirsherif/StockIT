import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adjustupdate',
  templateUrl: './adjustupdate.component.html',
  styleUrls: ['./adjustupdate.component.scss']
})
export class AdjustupdateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  quantity:number=1;
  i=1;
  plus(){
    if(this.i !=100){
      this.i++;
      this.quantity=this.i;
    }
  }
  minus(){
    if(this.i !=0){
      this.i--;
      this.quantity=this.i;
    }
  }

}
