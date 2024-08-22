import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSideRoutingModule } from './client-side-routing.module';
import { MyblogsComponent } from './components/myblogs/myblogs.component';
import { ContactToAdminComponent } from './components/contact-to-admin/contact-to-admin.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';

import { ReactiveFormsModule } from '@angular/forms';  // Import this


@NgModule({
  declarations: [
    MyblogsComponent,
    ContactToAdminComponent,
    HomeComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ClientSideRoutingModule,
    ReactiveFormsModule 
  ]
})
export class ClientSideModule {
  
 }
