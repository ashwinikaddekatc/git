import { ExcelService } from './services/excel.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainModule } from './modules/main/main.module';
import { LoginModule } from './modules/login/login.module';
import { MainService } from './services/main.service';
import { AlertService } from './services/alert.service';
import { HelperModule } from './pipes/helpers.module';
import { LogoComponent } from './modules/logo/logo.component';
import { AppConfig } from './app-config';
import { JwtInterceptor } from './services/jwt.interceptor';
import { UserInfoService } from './services/user-info.service';
import { AuthGuard } from './services/auth_guard.service';
import { LoginService } from './services/api/login.service';
import { ApiRequestService } from './services/api/api-request.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectSetupService } from './services/api/project-setup.service';
import { TechnologyStackService } from './services/api/technology-stack.service';
import { DropdownService } from './services/api/dropdown.service';
import { WireframeService } from './services/api/wireframe.service';
import { SuregitService } from './services/api/suregit.service';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HelperModule,
    MainModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    MainService,
    AlertService,
    ExcelService,
    UserInfoService,
    LoginService,
    ApiRequestService,
    ProjectSetupService,
    TechnologyStackService,
    DropdownService,
    WireframeService,
    SuregitService,

    AuthGuard,
    AppConfig,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
