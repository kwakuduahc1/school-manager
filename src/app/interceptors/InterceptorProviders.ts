import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService, ErrorHandlerInterceptor } from './auth-interceptor.service';
import { HttpXsrfInterceptor } from './XSRF_Interceptor';

export const HttpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true
  },
  {
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true
  },
  {
    provide: HTTP_INTERCEPTORS, useClass: HttpXsrfInterceptor, multi: true
  }
]
