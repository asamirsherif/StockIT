import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICategory } from "app/interfaces/icategory";
import { IProduct } from "app/interfaces/iproduct";
import { environment } from "environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class CategorytService {

  //api link
  host = environment.apiUrl + "/api/categories/";

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

  store(data:ICategory): Observable<any> {
    return this._http.post(`${this.host}`, data, { headers: this.header });
  }

  //get all data
  get(): Observable<any> {
    return this._http.get(`${this.host}`,{ headers: this.header , params:this.params});
  }

  //delete item by id
  delete(id:number): Observable<any> {
    return this._http.delete(`${this.host}${id}`,{ headers: this.header });
  }

  //update item by id
  update(id:number,data:ICategory): Observable<any> {
    return this._http.put(`${this.host}${id}`, data, { headers: this.header });
  }
  
  //show item by id
  show(id:number): Observable<any> {
    return this._http.get(`${this.host}${id}`,{ headers: this.header });
  }
  
  
}

