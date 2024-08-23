import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginSignupComponent } from './components/admin-login-signup/admin-login-signup.component';
import { HomeModule } from '../home/home.module';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdminLoginSignupComponent,
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HomeModule
  ]
})
export class AdminModule { }
