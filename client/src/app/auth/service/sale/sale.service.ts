import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ISale } from "app/interfaces/isale";
import { environment } from "environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  //api link
  host = environment.apiUrl + "/api/sale/";

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

  getAllSales() {
    return this._http.get(`${this.host}`, { headers: this.header, params: this.params })
  }

  store(data:ISale): Observable<any> {
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
  update(id:number,data:ISale): Observable<any>{
    return this._http.put(`${this.host}${id}`,data,{ headers: this.header })
  } 


  
}
