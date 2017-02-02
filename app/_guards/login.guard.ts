import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router) { }
  public canActivate() {
    if (tokenNotExpired()) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}