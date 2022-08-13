import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProduct } from "app/interfaces/iproduct";
import { environment } from "environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //api link
  host = environment.apiUrl + "/api/products/";

  // paramters and header declration
  params:HttpParams
  header:HttpHeaders


  constructor(private _http: HttpClient) {
    this.params = new HttpParams();
    this.header = new HttpHeaders({
      Accept: "application/json",
    }
    );
  }

  store(data:IProduct): Observable<any> {
    return this._http.post(`${this.host}`, data, { headers: this.header });
  }
  
}
