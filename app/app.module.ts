import { NgModule }      from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './common/auth.guards';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent} from './home/home.component';
import { routes } from './app.routes';
@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }) 
  ],
  declarations: [ AppComponent, LoginComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, AUTH_PROVIDERS, AuthGuard]
})
export class AppModule { }
 