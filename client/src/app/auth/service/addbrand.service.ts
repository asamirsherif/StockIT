import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddbrandService {
  public brandData={data:''}
  host = "http://localhost:8000/api/brands/"
  constructor(private _http:HttpClient) {}
 
  AddBrand(data:any):Observable<any>{
    return this._http.post(`${this.host}`, data)
  }
}
