import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { HrDashboardComponent } from './components/hr/hr-dashboard/hr-dashboard.component';
import { CandidateDashboardComponent } from './components/candidate/candidate-dashboard/candidate-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    AdminDashboardComponent,
    HrDashboardComponent,
    CandidateDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
