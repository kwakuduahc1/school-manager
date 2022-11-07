import { CanActivate, Event, NavigationCancel, NavigationEnd, NavigationStart, Router, RouterPreloader } from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StatusProvider } from '../providers/StatusProvider';
import { ToastrService } from 'ngx-toastr';
import { RouteProvider } from '../providers/RouteProvider';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
  // tslint:disable-next-line: typedef
  canActivate() {
    const token = localStorage.getItem('jwt');
    if (token) {
      if (!this.jwt.isTokenExpired(token)) {
        const tkn = this.jwt.decodeToken(token);
        this.status.roles = tkn['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
          this.status.user = {
            password: '',
            id: tkn['http://schemas.microsoft.com/ws/2008/06/identity/claims/id'],
            confirmPassword: '',
            fullName: tkn.FullName,
            usersID: tkn['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
            userName: tkn['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
          }
        return true;
      }
      else {
        this.toast.error('Your previous login expired\nKindly login again');
        this.status.logout();
      }
    }
    else {
      this.toast.error('Let us get to know each other first ');
    }
    //  this.router.navigate(['/welcome']);
    return false;
  }


  constructor(private jwt: JwtHelperService, private router: Router, private rp: RouteProvider, private status: StatusProvider, private toast: ToastrService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationCancel) {
        this.rp.path = event.url;
      }
    });
  }
}
