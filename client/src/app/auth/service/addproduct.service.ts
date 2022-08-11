import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddproductService {
 public productData={data:''}
 host = "http://localhost:8000/api/products/"
 constructor(private _http:HttpClient) {}

 AddProduct(data:any):Observable<any>{
   return this._http.post(`${this.host}`, data)
 }

}