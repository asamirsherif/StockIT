import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class UnitservService {
  public unitData = { data: "" };
  host = environment.apiUrl + "/api/units/";
  header = new HttpHeaders({
    Accept: "application/json",
  });

  params:HttpParams
  constructor(private _http: HttpClient) {
    this.params = new HttpParams();
  }

  AddUnit(data: any): Observable<any> {
    return this._http.post(`${this.host}`, data, { headers: this.header }).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }
  allunit(): Observable<any> {
    return this._http.get(`${this.host}`, { headers: this.header, params:this.params });
  }

  deleteUnit(id: any): Observable<any> {
    return this._http.delete(`${this.host}${id}`);
  }
  updateUnit(id: number, data: any): Observable<any> {
    return this._http.patch(`${this.host}${id}`, data);
  }

  getUnitid(id: any): Observable<any> {
    return this._http.get(`${this.host}${id}`);
  }
}
