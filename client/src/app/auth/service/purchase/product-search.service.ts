import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {

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

  purchaseSearch(search: string): Observable<any> {
    this.params = this.params.set('search',search)
    return this._http.get(`${this.host}purchaseProductSearch`, { headers: this.headers, params: this.params })
  }

  salesSearch(search: string , warehouse_id:number): Observable<any> {
    this.params = this.params.set('search',search)
    return this._http.get(`${this.host}saleProdcutSearch/${warehouse_id}`, { headers: this.headers, params: this.params })
  }

  adjSearch(search: string , warehouse_id:number): Observable<any> {
    this.params = this.params.set('search',search)
    return this._http.get(`${this.host}adjProdcutSearch/${warehouse_id}`, { headers: this.headers, params: this.params })
  }
}
