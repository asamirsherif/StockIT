import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  public currencyData={data:''}

  host = environment.apiUrl + "/api/currencies"

  constructor(private _http:HttpClient) {}

  addCurrency(data:any):Observable<any>{
    return this._http.post(`${this.host}`, data)
  }

  getAllCurrencies():Observable<any>{
    return this._http.get(`${this.host}`)
  }

  putCurrency(data:any):Observable<any>{
    return this._http.put(`${this.host}`, data)
  }

  delCurrency(data:any):Observable<any>{
    return this._http.delete(`${this.host}`, data)
  }

}
