import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginSignupComponent } from './components/admin-login-signup/admin-login-signup.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

const routes: Routes = [
  { path: 'admin-login-signup', component: AdminLoginSignupComponent, children: [] },
  { path: 'admin-home', component: AdminHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }