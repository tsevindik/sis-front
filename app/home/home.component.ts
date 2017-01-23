import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import {TranslateService} from 'ng2-translate';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { AuthGuard } from '../_guards/index';
import { ToastrService } from 'toastr-ng2';
@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;
  JwtHelper = new JwtHelper();
  isLogin: boolean;

  
   param = {value: 'world'};


  constructor(
    public router: Router,
    private translate: TranslateService,
    public http: Http,
    public authHttp: AuthHttp,
    public hasToken: AuthGuard,
    private toastrService: ToastrService
    ){
    this.jwt = localStorage.getItem('id_token');
    this.decodedJwt = this.JwtHelper.decodeToken(this.jwt);
    this.isLogin = this.hasToken.canActivate();


  }
  ngOnInit() {
        this.translate.addLangs(["en", "tr"]);
        this.translate.setDefaultLang('en');

        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|tr/) ? browserLang : 'en');
    }
  logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['login']);
  }
}