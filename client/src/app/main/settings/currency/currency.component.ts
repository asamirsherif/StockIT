import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { CurrencyService } from 'app/auth/service/currency/currency.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  createcurrency:FormGroup;
  constructor(private modalService: NgbModal ,private fb:FormBuilder, 
    private _CurrencyService: CurrencyService, private _router:Router,
    ) { 
    this.createcurrency = new FormGroup({
      code: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      symbol: new FormControl('', Validators.required)})
  }

  data: any = {};
  

  openModal(contentModal) {
    this.modalService.open(contentModal);
    }
  ngOnInit(): void {

    this._CurrencyService.getAllCurrencies().subscribe((res)=>{
      this.data = res;
      console.log(res);
    }),
      (e)=>{
        this._router.navigate(['currency'])
      }
    console.log(this.data);
  }

  
  
  AddCurrency() {
    if(this.createcurrency.valid){
      console.log(this.createcurrency.value);
      let currencydata = this.createcurrency.value;

      let data = {
        name: currencydata.name,
        code: currencydata.code,
        symbol: currencydata.symbol,
      }

      
      try {
        console.log(data);
        this._CurrencyService.addCurrency(this.createcurrency.value)
        .subscribe((res)=>{
          return this._router.navigate(['currency']);
        })
        
      } catch (error) {
        
      }
    

    }
  } 

  

  

}
