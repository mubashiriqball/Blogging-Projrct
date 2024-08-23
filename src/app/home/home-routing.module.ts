import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeNavComponent } from './components/home-nav/home-nav.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HomeaboutComponent } from './components/homeabout/homeabout.component';
import { HomeContactComponent } from './components/home-contact/home-contact.component';
import { AdminLoginSignupComponent } from '../admin/components/admin-login-signup/admin-login-signup.component';
import { ClientLoginSignupComponent } from '../client-side/components/client-login-signup/client-login-signup.component';
import { AdminHomeComponent } from '../admin/components/admin-home/admin-home.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home-nav', component: HomeNavComponent },
  { path: 'homeabout', component: HomeaboutComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'homecontact', component: HomeContactComponent },
  { path: 'admin-login-signup', component: AdminLoginSignupComponent },
  { path: 'client-side-login-signup', component: ClientLoginSignupComponent },
  // { path: 'admin-home', component: AdminHomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
