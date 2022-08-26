import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  private host = environment.apiUrl + "/api/reports";
  private headers: HttpHeaders;
  public params: HttpParams;

  constructor(
    private _http: HttpClient
  ) {
    this.headers = new HttpHeaders({
      Accept: "application/json",
    })
    this.params = new HttpParams();
  }


  pofitLoss(): Observable<any> {
    return this._http.get(`${this.host}/pofit-loss`, { headers: this.headers, params: this.params });
  }

  warehouseStock(): Observable<any> {
    return this._http.get(`${this.host}/warehouse-stock`, { headers: this.headers, params: this.params })
  }
  expenseWarehouse(): Observable<any> {
    return this._http.get(`${this.host}/expenses-warehouse`, { headers: this.headers, params: this.params })
  }
  salesWarehouse(): Observable<any> {
    return this._http.get(`${this.host}/sales-warehouse`, { headers: this.headers, params: this.params })
  }
}
