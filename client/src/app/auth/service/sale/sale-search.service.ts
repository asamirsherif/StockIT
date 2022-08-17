import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SaleSearchService {

    host = environment.apiUrl + "/api/";

    // for url
    params: HttpParams;
    headers: HttpHeaders;
    constructor(private _http: HttpClient) {
      this.params = new HttpParams();
      this.headers = new HttpHeaders({
        Accept: "application/json",
      })
    }
  
    salesSearch(search: string): Observable<any> {
      this.params = this.params.set('search',search)
      return this._http.get(`${this.host}SalesProductSearch`, { headers: this.headers, params: this.params })
    }
  }