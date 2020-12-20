import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { CandidateDashboardComponent } from './components/candidate/candidate-dashboard/candidate-dashboard.component';
import { HrDashboardComponent } from './components/hr/hr-dashboard/hr-dashboard.component';
import { UserLoginComponent } from './login/user-login/user-login.component';

const routes: Routes = [

  { path: 'login', component: UserLoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'candidate-dashboard', component: CandidateDashboardComponent },
  { path: 'hr-dashboard', component: HrDashboardComponent },
  { path: '', redirectTo: '/login', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
