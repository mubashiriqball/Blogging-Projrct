import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLoginSignupComponent } from './components/client-login-signup/client-login-signup.component';

const routes: Routes = [
  { path: 'client-side-login-signup', component: ClientLoginSignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSideRoutingModule { }
