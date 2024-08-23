import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeNavComponent } from './components/home-nav/home-nav.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HomeaboutComponent } from './components/homeabout/homeabout.component';
import { HomeservicesComponent } from './components/homeservices/homeservices.component';
import { HomeContactComponent } from './components/home-contact/home-contact.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { HomeBlogsComponent } from './components/home-blogs/home-blogs.component';

@NgModule({
  declarations: [
    HomeNavComponent,
    HomepageComponent, HomeaboutComponent, HomeservicesComponent, HomeContactComponent, HomeFooterComponent, HomeBlogsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeNavComponent,
    HomeFooterComponent
  ]
})
export class HomeModule { }
