import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactToAdminComponent } from './components/contact-to-admin/contact-to-admin.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MyblogsComponent } from './components/myblogs/myblogs.component';
import { FooterComponent } from './components/footer/footer.component';
const routes: Routes = [
{
  path:'',
  component:LayoutComponent,
  children:[

     {path:'home',component:HomeComponent},
    { path: 'myblogs', component: MyblogsComponent },
    { path: 'contact-to-admin', component: ContactToAdminComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
    {path: 'footer', component: FooterComponent }

  ],
} 
];

@NgModule({
  //forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }) 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // for nav tab
 
})
export class ClientSideRoutingModule { }
