import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { AuthGuard } from '../_guards/index';
import { ToastrService } from 'toastr-ng2';
@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;
  JwtHelper = new JwtHelper();
  isLogin: boolean;
  constructor(
    public router: Router,
    public http: Http,
    public authHttp: AuthHttp,
    public hasToken: AuthGuard,
    private toastrService: ToastrService
    ){
    this.jwt = localStorage.getItem('id_token');
    this.decodedJwt = this.JwtHelper.decodeToken(this.jwt);
    this.isLogin = this.hasToken.canActivate();

    // this.toastrService.success('Hello world!', 'Toastr fun!');

  }
  logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['login']);
  }
}