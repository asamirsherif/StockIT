import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IExpenseCategory } from "app/interfaces/iexpense-category";
import { environment } from "environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ExpenseCategoryService {

  //api link
  host = environment.apiUrl + "/api/expensecategories/";

  //params and headers
  headers: HttpHeaders;
  params: HttpParams;

  constructor(private _Http: HttpClient) {
    this.params = new HttpParams();
    this.headers = new HttpHeaders({
      Accept: "application/json",
    });
  }

  getall() {
    return this._Http.get(`${this.host}`, { headers: this.headers, params: this.params })
  }

  store(data: IExpenseCategory): Observable<any> {
    return this._Http.post(`${this.host}`, data, { headers: this.headers })
  }
  destroy(id:number):Observable<any>{
    return this._Http.delete(`${this.host}${id}`, {headers:this.headers})

  }
  //update item by id
  update(id:number,data:IExpenseCategory): Observable<any> {
    return this._Http.put(`${this.host}${id}`, data, { headers: this.headers });
  }
}
