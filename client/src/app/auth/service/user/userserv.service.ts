import { Iuser } from 'app/interfaces/iuser';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserservService {
  host = environment.apiUrl + "/api/users/";
  user_host = environment.apiUrl + "/api/user/";

  header: HttpHeaders;
  params: HttpParams;
  constructor(private _http: HttpClient) { 
    this.params = new HttpParams();
    this.header = new HttpHeaders({
      Accept: "application/json",
    });

  }
  AddUser(data: Iuser): Observable<any> {
    return this._http.post(`${this.host}`, data, { headers: this.header });
  }


  allUser(): Observable<any> {
    return this._http.get(`${this.host}`, { headers: this.header, params: this.params });
  }

  getAuthUser(): Observable<any> {
    return this._http.get(`${this.user_host}`, { headers: this.header });
  }

  deleteUser(id: any): Observable<any> {
    return this._http.delete(`${this.host}${id}`);
  }
  updateUser(id: number, data: Iuser): Observable<any> {
    return this._http.patch(`${this.host}${id}`, data);
  }

  getUserid(id: number): Observable<any> {
    return this._http.get(`${this.host}${id}`);
  } 
}
