import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AppInfos, contentHeaders } from '../_helpers/index';
import { ToastrService } from 'toastr-ng2';
@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  loading = false;
  model: any = {};
  constructor(
  public router: Router,
  public http: Http,
  private toastrService: ToastrService
  ) { }
  login() {
    this.loading = true;
    let body = JSON.stringify({ username: this.model.username, password: this.model.password });
    this.http.post(AppInfos.API_ENDPOINT + 'auth/authenticate/', body , { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().token);
          this.toastrService.success('Hello', 'Login is successful');
          this.router.navigate(['home']);
        },
        error => {
          this.loading = false;
          console.log(error.text());
          this.toastrService.error('Error', error.text());
        }
      );
  }
  
}