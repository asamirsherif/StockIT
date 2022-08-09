import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { User, Role } from 'app/auth/models';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'app/auth/service/user.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  //public
  public currentUser: Observable<User>;

  //private
  private currentUserSubject: BehaviorSubject<User>;

  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   */
  constructor(private _http: HttpClient, private _toastrService: ToastrService, private _UserService : UserService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // getter: currentUserValue
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  /**
   *  Confirms if user is admin
   */
  get isAdmin() {
    return this.currentUser && this.currentUserSubject.value.role === Role.Admin;
  }

  /**
   *  Confirms if user is client
   */
  get isClient() {
    return this.currentUser && this.currentUserSubject.value.role === Role.Client;
  }
 
  /**
   * User login
   *
   * @param email
   * @param password
   * @returns user
   */
  login(username: string, password: string, client_id:number, client_secret:string, grant_type:string) {
    return this._http
      .post<any>(`${environment.apiUrl}/oauth/token`, { username, password , client_id, client_secret, grant_type})
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.access_token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            
            localStorage.setItem('currentUser', JSON.stringify(user));

            user.data = this._UserService.getLoggedUser();
            user.permission = this._UserService.getUserPermissions();

            user.data.subscribe((user_data)=>{
              user.data = user_data;
              localStorage.setItem('currentUser', JSON.stringify(user));
              console.log('Welcome ' + JSON.parse(localStorage.currentUser).data.firstname);
            });

            user.permission.subscribe((user_permissions)=>{
              user.permission = user_permissions;
              localStorage.setItem('currentUser', JSON.stringify(user));
            });

            

            // Display welcome toast!
            setTimeout(() => {
              this._toastrService.success(
                'You have successfully logged in as an ' +
                  user.role +
                  ' user to Vuexy. Now you can start to explore. Enjoy! 🎉',
                '👋 Welcome, ' + user.data.firstname + '!',
                { toastClass: 'toast ngx-toastr', closeButton: true }
              );
            }, 2500);

            // notify
            this.currentUserSubject.next(user);
          }

          return user;
        })
      );
  }

  /**
   * User logout
   *
   */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // notify
    this.currentUserSubject.next(null);
  }
}
