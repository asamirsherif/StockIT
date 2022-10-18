import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from 'app/auth/service';
import { AuthenticationService } from 'app/auth/service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  /**
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   */
  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private _userService: UserService
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        if ([401, 403].indexOf(err.status) !== -1) {
          // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          this._router.navigate(['/pages/miscellaneous/not-authorized']);

          // ? Can also logout and reload if needed
          // this._authenticationService.logout();


          //retry to get authenticated
          if(localStorage.getItem('currentUser')){
            
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));

            this._userService.getLoggedUser().subscribe((res)=>{
              currentUser = {...currentUser , ...res}
              
            })

            this._userService.getUserPermissions().subscribe((res)=>{
              currentUser.permissions = Object.values(res);
              localStorage.setItem('currentUser', JSON.stringify(currentUser));
              })  

          }

        //   location.reload();
        }
        throwError
        const error = err;
        return throwError(err);
      })
    );
  }
}
