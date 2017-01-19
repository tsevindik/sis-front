import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { AuthGuard } from '../_guards/index';
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
    public hasToken: AuthGuard
    ){
    this.jwt = localStorage.getItem('id_token');
    this.decodedJwt = this.JwtHelper.decodeToken(this.jwt);
    this.isLogin = this.hasToken.canActivate();
  }
  logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['login']);
  }
}