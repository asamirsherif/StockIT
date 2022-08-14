import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService, UserService } from 'app/auth/service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  /**
   *
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   */
  constructor(
    private _router: Router, 
    private _authenticationService: AuthenticationService,
    private _userService: UserService) {}

  // canActivate
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // let currentUser = this._authenticationService.currentUserValue; causes hell of unknown errors

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      // check if route is restricted by role
      if (route.data.permission && currentUser.permissions.indexOf(route.data.permission) === -1) {
        // role not authorised so redirect to not-authorized page
        this._router.navigate(['/pages/miscellaneous/not-authorized']);
        return false;
      }
      
      

      // console.log(this.getAuth())
      // // check if response is true
      // if(!this.getAuth()){
      //   // role not authorised so redirect to login
      //   this._router.navigate(['/pages/login']);
      //   return false;
      // }
      

      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this._router.navigate(['/pages/login'], { queryParams: {url:decodeURIComponent(state.url)} });
    return false;
  }

  // async getAuth() {
  //     let result:any;
  //     //Check if stored token is correct
  //       const observed = {
  //         next: (res) => {
  //           result = res.success;
  //         },
  //       };
  //       await this._userService.isAuth().subscribe(observed)
      
  //     if(result){return true}
  // }


}
