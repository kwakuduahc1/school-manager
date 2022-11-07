import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class TokenProvider {
  private getAsyncToken() {
    this.token = localStorage.getItem('jwt');
  }

  getHeader(): string {
    return `Bearer ${this.token}`;
  }
  token!: string | null;
  constructor(router: Router) {
    this.getAsyncToken();
    if (!this.token)
      router.navigate(["/welcome"])
  }
}
