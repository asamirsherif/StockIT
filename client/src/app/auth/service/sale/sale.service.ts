import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISale } from 'app/interfaces/isales';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  host = environment.apiUrl + "/api/sales";

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

  store(data: ISale): Observable<any> {
    return this._http.post(`${this.host}`, data, { headers: this.headers })
  }

  show(id: number): Observable<any> {
    return this._http.get(`${this.host}/${id}`, { headers: this.headers })
  }

  update(id: number, data: ISale): Observable<any> {
    return this._http.put(`${this.host}/${id}`, data, { headers: this.headers })
  }

  delete(id: number): Observable<any> {
    return this._http.delete(`${this.host}/${id}`, { headers: this.headers })
  }
}
