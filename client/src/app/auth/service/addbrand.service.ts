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
  allbrand():Observable<any>{
    return this._http.get(`${this.host}`)
  }
  deleteBrand(id:any):Observable<any>{
    return this._http.delete(`${this.host}${id}`)
  }
  updateBrand(id:string,data:any):Observable<any>{
    return this._http.patch(`${this.host}${id}`,data)
  }
  
  // getBrandid(id:any):Observable<any>{
  //   return this._http.get(`${this.host}${id}`)
  // }
}
