import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard, LoginGuard } from './_guards/index';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'toastr-ng2';
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
    }),
    ToastrModule.forRoot(), // ToastrModule added
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent 
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    AUTH_PROVIDERS,
    AuthGuard,
    LoginGuard
  ],
  bootstrap:    [
    AppComponent 
  ]
})
export class AppModule { }
 