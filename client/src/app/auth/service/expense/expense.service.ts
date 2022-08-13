import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable, throwError } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  host = environment.apiUrl + "/api/expenses/";

  //params and headers
  headers: HttpHeaders;
  params: HttpParams;

  constructor(private _Http: HttpClient) {
    this.params = new HttpParams();
    this.headers = new HttpHeaders({
      Accept: "application/json",
    });
  }


  
}
