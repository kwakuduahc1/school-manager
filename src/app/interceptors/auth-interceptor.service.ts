import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { ActivityProvider } from '../providers/ActivityProvider';
import { TokenProvider } from '../providers/TokenProvider';
import { BsHandler } from '../providers/bsHandler';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private token: TokenProvider) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   // if (this.token.getHeader().match(/^[a-zA-Z0-9]$/)) {
      const nreq = req.clone({ headers: req.headers.append('Authorization', this.token.getHeader() as string) });
      return next.handle(nreq);
    // }
    // return next.handle(req);
  }
}

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private act: ActivityProvider, private hand: BsHandler) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.act.beginProc();
    return next.handle(req).pipe(
      tap(() => { }, (err: HttpErrorResponse) => this.hand.onError(err)), finalize(() => this.act.endProc()));
  }
}
