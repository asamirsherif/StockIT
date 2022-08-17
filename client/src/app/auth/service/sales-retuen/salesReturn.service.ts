import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ISaleReturn } from "app/interfaces/isales-return";
import { environment } from "environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SaleReturnService {

  //api link
  host = environment.apiUrl + "/api/salesReturn/";

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

  getAllSalesReturn() {
    return this._http.get(`${this.host}`, { headers: this.header, params: this.params })
  }

  store(data:ISaleReturn): Observable<any> {
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

  /**
   * 
   * @param id 
   * @returns show data of product by id
   */
  update(id:number,data:ISaleReturn): Observable<any>{
    return this._http.put(`${this.host}${id}`,data,{ headers: this.header })
  } 

  deleteSalesReturn(id: any): Observable<any> {
    return this._http.delete(`${this.host}${id}`);
  }
  
}
