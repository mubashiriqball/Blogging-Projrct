import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FooterComponent } from './footer/footer.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminMyblogsComponent } from './admin-myblogs/admin-myblogs.component';

const routes: Routes = [
  // Default route redirects to admin-home
  { path: '', redirectTo: 'admin-home', pathMatch: 'full' },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'admin-navbar', component: AdminNavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'admin-profile', component: AdminProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin-myblogs', component: AdminMyblogsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

