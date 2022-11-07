import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BsHandler {

  constructor(private router: Router, private toast: ToastrService) {
  }

  onError(err: HttpErrorResponse): void {
    let message = '';
    if (err.statusText === 'Unknown Error') {
      message = 'Kindly check your internet connection. it appears you are offline';
    }
    else {
      switch (err.status) {
        case 500:
          message = err.error.message || 'A server error occurred. Contact support';
          break;
        case 400:
          message = err.error.message || 'A bad request was made to the server.\nCheck the request and try again.\n A log has been created';
          break;
        case 401:
          this.toast.error('Illegal action');
          this.router.navigate(['/welcome']);
          break;
        case 403:
          this.toast.error('Authorization failure');
          this.router.navigate(['/welcome']);
          break;
        case 404:
          message = err.error.message || 'The resource was not found';
          break;
        default:
          message = err.error.message || 'An unexpected error occurred. Contact support';
          break;
      }
    }
    if (message) {
      this.toast.error(message);
    }
    else if (err.error.message || err.message) {
      message = err.error.message || err.message;
    }
    else if (err.status >= 500) {
      message = 'A server level occurred. Please try again or contact support';
    }
    else if (!err.error) {
      message = 'Yet to be done error';
    }
    else {
      message = err.statusText;
    }
    this.toast.error(message);
  }
}
