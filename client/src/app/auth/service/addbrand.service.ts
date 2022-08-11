import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class AddbrandService {
  public brandData = { data: "" };
  host = environment.apiUrl + "/api/brands/";
  header = new HttpHeaders({
    Accept: "application/json",
  });

  params:HttpParams

  constructor(private _http: HttpClient) {
    this.params = new HttpParams();
  }

  AddBrand(data: any): Observable<any> {
    return this._http.post(`${this.host}`, data, { headers: this.header }).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }
  allbrand(): Observable<any> {
    return this._http.get(`${this.host}`, { headers: this.header, params:this.params });
  }

  deleteBrand(id: any): Observable<any> {
    return this._http.delete(`${this.host}${id}`);
  }
  updateBrand(id: number, data: any): Observable<any> {
    return this._http.patch(`${this.host}${id}`, data);
  }

  getBrandid(id: any): Observable<any> {
    return this._http.get(`${this.host}${id}`);
  }
}
