import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';
import { User } from 'app/auth/models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  /**
   *
   * @param {HttpClient} _http
   */
  constructor(private _http: HttpClient) {}

  /**
   * Get all users
   */
  getAll() {
    return this._http.get<User[]>(`${environment.apiUrl}/api/users`);
  }

  /**
   * Get logged user 
   */
   getLoggedUser() {
    return this._http.get<User>(`${environment.apiUrl}/api/user`);
  }

  /**
   * Get user permission by id
   */
   getUserPermissions() {
    return this._http.get<User>(`${environment.apiUrl}/api/GetPermissions`);
  }

  /**
   * Get user by id
   */
  getById(id: number) {
    return this._http.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  /**
   * check if user is authentecated 
   */
   isAuth(): Observable<any>{
    return this._http.get<User>(`${environment.apiUrl}/api/GetUserAuth`);
  }

  

}
