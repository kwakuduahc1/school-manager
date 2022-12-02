import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { IUsers } from '../dtos/IUsers';
import { LoginHttpService } from '../http/login-http-service';
import { RouteProvider } from './RouteProvider';

@Injectable({ providedIn: 'root' })
export class StatusProvider {

  roles: string[] = [];
  user: IUsers | undefined;
  private token: string | null;

  constructor(
    private router: Router,
    private toast: ToastrService,
    private http: LoginHttpService,
    private rp: RouteProvider,
    private jwt: JwtHelperService) {
    this.token = localStorage.getItem('jwt');
    if (this.token) {
      if (!jwt.isTokenExpired(this.token)) {
        this.setCreds(jwt.decodeToken(this.token as string));
      }
      else {
        this.logout(true);
      }
    }
  }

  isLoggedIn(): boolean {
    if (this.user) { return true; }
    return false;
  }

  logout(initiated: boolean = false) {
    this.token = null;
    localStorage.clear();
    this.user = undefined;
    // this.router.navigate(['/login']);
    if (initiated) { this.toast.success('You have successfully signed out'); }
    else { this.toast.info('Your previous session has expired'); }
  }

  isAdmin(): boolean {
    if (Array.isArray(this.roles)) { return this.roles.some(x => x === 'Power' || x === 'Developer'); }
    else { return false; }
  }


  getAsyncToken(): string | null {
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
    this.write();
  }

  login(login: IUsers): void {
    this.toast.info('Signing in. Be patient');
    this.http.login(login).subscribe((res: { token: string }) => {
      this.setToken(res.token);
      this.setCreds(this.jwt.decodeToken(res.token));
      this.router.navigate(['/home']);
    }, () => {
      this.toast.error('Invalid login information');
    });
  }

  setCreds(tkn: { [x: string]: any }) {
    this.roles = tkn['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    this.user = {
      password: '',
      id: tkn.id,
      confirmPassword: '',
      fullName: tkn.FullName,
      usersID: tkn['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
      userName: tkn['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
    };
  }

  private write() {
    localStorage.setItem('jwt', this.token as string);
  }
}
