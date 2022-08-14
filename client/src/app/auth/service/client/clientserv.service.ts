import { Iclient } from './../../../interfaces/iclient';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ClientservService {

  host = environment.apiUrl + "/api/clients/";

  header: HttpHeaders;
  params: HttpParams;

  constructor(private _http: HttpClient) {
    this.params = new HttpParams();
    this.header = new HttpHeaders({
      Accept: "application/json",
    });
  }


  AddClient(data: Iclient): Observable<any> {
    return this._http.post(`${this.host}`, data, { headers: this.header });
  }


  allClient(): Observable<any> {
    return this._http.get(`${this.host}`, { headers: this.header, params: this.params });
  }

  deleteClient(id: any): Observable<any> {
    return this._http.delete(`${this.host}${id}`);
  }
  updateClient(id: number, data: Iclient): Observable<any> {
    return this._http.patch(`${this.host}${id}`, data);
  }

  getClientid(id: number): Observable<any> {
    return this._http.get(`${this.host}${id}`);
  }
}


