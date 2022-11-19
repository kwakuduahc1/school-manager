import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginHttpService } from '../../../http/login-http-service';
import { ActivityProvider } from '../../../providers/ActivityProvider';
import { ToastrService } from 'ngx-toastr';
import { IRoles, IUsers } from '../../../dtos/IUsers';
import { RouteProvider } from '../../../providers/RouteProvider';
import { StatusProvider } from '../../../providers/StatusProvider';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  roles: IRoles[];
  constructor(
    private htpp: LoginHttpService,
    private rp: RouteProvider,
    private router: Router,
    private status: StatusProvider,
    private toast: ToastrService,
    route: ActivatedRoute,
    public act: ActivityProvider) {
    this.roles = route.snapshot.data.roles;
    this.form = new FormGroup({
      userName: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])),
      password: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])),
      confirmPassword: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])),
      role: new FormControl(null, Validators.compose([Validators.required])),
      fullName: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(75)]))
    });
  }

  ngOnInit(): void {

  }

  register(login: IUsers) {
    this.htpp.register(login).subscribe(res => {
      this.toast.success(`The user account was created for ${res.fullName}`);
      this.form.reset();
    });
  }
}
