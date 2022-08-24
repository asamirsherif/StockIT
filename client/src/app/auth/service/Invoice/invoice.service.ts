import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  host = environment.apiUrl + "/api";

  //params and headers
  headers: HttpHeaders;
  params: HttpParams;

  constructor(private _Http: HttpClient) {
    this.params = new HttpParams();
    this.headers = new HttpHeaders({
      Accept: "application/json",
    });
  }



  sale(id: number): Observable<any> {
    return this._Http.get(`${this.host}/saleInvoice/${id}`, { headers: this.headers });
  }

  salePDF(id: number): Observable<any> {
    return this._Http.get(`${this.host}/saleInvoicePDF/${id}`, { headers: this.headers });
  }

  purchase(id: number): Observable<any> {
    return this._Http.get(`${this.host}/purchaseInvoice/${id}`, { headers: this.headers });
  }
}
