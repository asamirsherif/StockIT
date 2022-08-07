import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddbrandService {
 public brandData={data:''}
 host = environment.apiUrl + "/api/brands/"
  constructor(private _http:HttpClient) {}
 
  AddBrand(data:any):Observable<any>{
    return this._http.post(`${this.host}`, data)
  }
  // addBrand(){
  //   return this._http.get('http:/127.0.0.1:8000/api/brands')
  // }

  allbrand():Observable<any>{
    return this._http.get(`${this.host}`)
  }
  deleteBrand(id:any):Observable<any>{
    return this._http.delete(`${this.host}${id}`)
  }
}
