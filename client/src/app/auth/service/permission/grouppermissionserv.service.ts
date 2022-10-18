import { environment } from 'environments/environment';
import { Ipermission } from './../../../interfaces/ipermission';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class GrouppermissionservService {
  host = environment.apiUrl + "/api/GetPermissions/";
  host2 = environment.apiUrl + "/api/roles/";
  header: HttpHeaders;
  params: HttpParams;
  constructor(private _http: HttpClient) { 
    this.params = new HttpParams();
    this.header = new HttpHeaders({
      Accept: "application/json",
    });
  }
  AddPermisssion(data: Ipermission): Observable<any> {
    return this._http.post(`${this.host}`, data, { headers: this.header });
  }

  AddRole(data: Ipermission): Observable<any> {
    return this._http.post(`${this.host2}`, data, { headers: this.header });
  }

  allPermisssion(): Observable<any> {
    return this._http.get(`${this.host}`, { headers: this.header, params: this.params });
  }

  allRole(): Observable<any> {
    return this._http.get(`${this.host2}`, { headers: this.header, params: this.params });
  }

  deletePermisssion(id: any): Observable<any> {
    return this._http.delete(`${this.host}${id}`);
  }

  deleteRole(id: any): Observable<any> {
    return this._http.delete(`${this.host2}${id}`);
  }

  updatePermisssion(id: number, data: Ipermission): Observable<any> {
    return this._http.patch(`${this.host}${id}`, data);
  }

  updateRole(id: number, data: Ipermission): Observable<any> {
    return this._http.patch(`${this.host2}${id}`, data);
  }

  getPermisssionid(id: number): Observable<any> {
    return this._http.get(`${this.host}${id}`);
  } 

  getRoleid(id: number): Observable<any> {
    return this._http.get(`${this.host2}${id}`);
  } 
}
