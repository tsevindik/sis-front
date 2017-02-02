import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { AppInfos, contentHeaders } from '../_helpers/index';
@Injectable()
export class AuthCrudService {
  constructor(public authHttp: AuthHttp) { }
  getMethod(url: string, data?: string) {
    return this.authHttp.get(AppInfos.API_ENDPOINT + url);
  }
  sendMethodWithPut(url: string, data?: Object) {
    return this.authHttp.put(AppInfos.API_ENDPOINT + url, data, { headers: contentHeaders });
  }
}