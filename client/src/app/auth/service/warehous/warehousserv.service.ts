import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WarehousservService {
  public wareData = { data: "" };
  host = environment.apiUrl + "/api/warehouses/";
  header = new HttpHeaders({
    Accept: "application/json",
  });

  params:HttpParams
  constructor(private _http: HttpClient) {
    this.params = new HttpParams();
  }

  AddWare(data: any): Observable<any> {
    return this._http.post(`${this.host}`, data, { headers: this.header }).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }
  allware(): Observable<any> {
    return this._http.get(`${this.host}`, { headers: this.header, params:this.params });
  }

  deleteWare(id: any): Observable<any> {
    return this._http.delete(`${this.host}${id}`);
  }
  updateWare(id: number, data: any): Observable<any> {
    return this._http.patch(`${this.host}${id}`, data);
  }

  getWareid(id: any): Observable<any> {
    return this._http.get(`${this.host}${id}`);
  }
}
