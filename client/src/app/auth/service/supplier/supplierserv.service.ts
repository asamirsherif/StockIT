import { Isupplier } from './../../../interfaces/isupplier';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SupplierservService {
  host = environment.apiUrl + "/api/providers/";

  header: HttpHeaders;
  params: HttpParams;
  constructor(private _http: HttpClient) {
    this.params = new HttpParams();
    this.header = new HttpHeaders({
      Accept: "application/json",
    });
   }
   AddSupplier(data: Isupplier): Observable<any> {
    return this._http.post(`${this.host}`, data, { headers: this.header });
  }


  allSupplier(): Observable<any> {
    return this._http.get(`${this.host}`, { headers: this.header, params: this.params });
  }

  deleteSupplier(id: any): Observable<any> {
    return this._http.delete(`${this.host}${id}`);
  }
  updateSupplier(id: number, data: Isupplier): Observable<any> {
    return this._http.patch(`${this.host}${id}`, data);
  }

  getSipplierid(id: number): Observable<any> {
    return this._http.get(`${this.host}${id}`);
  } 
}
