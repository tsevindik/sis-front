import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';
import { AuthGuard, LoginGuard } from './_guards/index';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CollapseModule, TooltipModule, DropdownModule } from 'ng2-bootstrap';
import { ToastrModule } from 'toastr-ng2';
import { TranslateComponent } from './_helpers/index';
import { AuthCrudService } from './_services/index';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UniversityConfig } from './_components/index';
import { routes } from './app.routes';
@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    ToastrModule.forRoot(),
    CollapseModule.forRoot(),
    DropdownModule.forRoot(),
    TooltipModule.forRoot(),
    TranslateModule.forRoot()
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UniversityConfig,
    TranslateComponent
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    AUTH_PROVIDERS,
    AuthGuard,
    LoginGuard,
    AuthCrudService
  ],
  bootstrap: [
    AppComponent,
    TranslateComponent
  ]
})
export class AppModule { }
