import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPurchase } from 'app/interfaces/ipurchase';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  host = environment.apiUrl + "/api/purchases/";

  params: HttpParams;
  headers: HttpHeaders;

  constructor(private _http: HttpClient) {
    this.params = new HttpParams();
    this.headers = new HttpHeaders({
      Accept: "application/json",
    });
  }


  getAll(): Observable<any> {
    return this._http.get(`${this.host}`, { headers: this.headers, params: this.params });
  }

  store(data: IPurchase): Observable<any> {
    return this._http.post(`${this.host}`, data, { headers: this.headers })
  }

  show(id: number): Observable<any> {
    return this._http.get(`${this.host}${id}`, { headers: this.headers })
  }

  update(id: number, data: IPurchase): Observable<any> {
    return this._http.put(`${this.host}${id}`, data, { headers: this.headers })
  }

  delete(id: number): Observable<any> {
    return this._http.delete(`${this.host}${id}`, { headers: this.headers })
  }
}
