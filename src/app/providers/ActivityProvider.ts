import { Injectable } from '@angular/core';
// import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({ providedIn: 'root' })
export class ActivityProvider {
  isProcessing = false;
  isError = false;
  isDismissed = false;
  message = '';

  // constructor(private spinner: NgxSpinnerService) {
  // }

  constructor() {
  }

  beginProc(): void {
    this.isProcessing = true;
    this.isDismissed = true;
    this.isError = false;
    // this.spinner.show();
  }


  endProc(): void {
    this.isProcessing = false;
    this.isDismissed = this.isError ? true : false;
    // this.spinner.hide();
  }
}
