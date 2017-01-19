import { Component } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { AppInfos, contentHeaders } from '../_helpers/index';
@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  constructor(
  public router: Router,
  public http: Http
  ) { }
  login(event: any, username: string, password: string) {
    event.preventDefault();
    // let body = JSON.stringify({ username, password });
    let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        let body = urlSearchParams.toString()
    this.http.post(AppInfos.API_ENDPOINT + 'auth/authenticate/', body , { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().token);
          this.router.navigate(['home']);
        },
        error => {
          console.log(error.text());
        }
      );
  }
  
}