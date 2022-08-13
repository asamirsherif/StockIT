import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  public currData = { data: "" };
  host = environment.apiUrl + "/api/currencies/";
  header = new HttpHeaders({
    Accept: "application/json",
  });

  params:HttpParams

  constructor(private _http: HttpClient) {
    this.params = new HttpParams();
  }

  AddCurr(data: any): Observable<any> {
    return this._http.post(`${this.host}`, data, { headers: this.header }).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }
  allcurr(): Observable<any> {
    return this._http.get(`${this.host}`, { headers: this.header, params:this.params });
  }

  deleteCurr(id: any): Observable<any> {
    return this._http.delete(`${this.host}${id}`);
  }
  updateCurr(id: number, data: any): Observable<any> {
    return this._http.patch(`${this.host}${id}`, data);
  }

  getCurrid(id: any): Observable<any> {
    return this._http.get(`${this.host}${id}`);
  }
}
