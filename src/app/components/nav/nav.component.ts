import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUsers, LoginVm } from '../../dtos/IUsers';
import { ActivityProvider } from '../../providers/ActivityProvider';
import { StatusProvider } from '../../providers/StatusProvider';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isExpanded = false;
  form: FormGroup;
  showPass = false;
  constructor(
    public status: StatusProvider,
    public act: ActivityProvider) {
    this.form = new FormGroup({
      userName: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])),
      password: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(50)]))
    });
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }


  login(login: IUsers): void {
    this.status.login(login);
  }

  logout() {
    this.status.logout(true);
  }
}
