import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Isetting } from 'app/interfaces/isetting';
import { environment } from "environments/environment";
import { Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class SystemsettingService {
//api link
host = environment.apiUrl + "/api/settings/";

// paramters and header declration
params:HttpParams
header:HttpHeaders
  constructor(private _http: HttpClient) { 
    this.params = new HttpParams();
    this.header = new HttpHeaders({
      Accept: "application/json",
    }
    );
  }
  store(data:Isetting): Observable<any> {
    return this._http.post(`${this.host}`, data, { headers: this.header });
  }

  get(){
    return this._http.get(`${this.host}`)
  }
  
  /**
   * 
   * @param id 
   * @returns show data of product by id
   */
  show(id:number){
    return this._http.get(`${this.host}${id}`, { headers: this.header })
  } 

  
  update(id:number,data:Isetting): Observable<any>{
    return this._http.put(`${this.host}${id}`,data,{ headers: this.header })
  } 

  destroy(id:number):Observable<any>{
    return this._http.delete(`${this.host}${id}`, {headers:this.header})

  }
  
}
