import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientSideRoutingModule } from './client-side-routing.module';
import { ClientLoginSignupComponent } from './components/client-login-signup/client-login-signup.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    ClientLoginSignupComponent
  ],
  imports: [
    CommonModule,
    ClientSideRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ClientSideModule { }
