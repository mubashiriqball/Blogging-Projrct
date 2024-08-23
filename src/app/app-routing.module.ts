import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled', // Enable fragment scrolling for navtab in client home
    scrollPositionRestoration: 'enabled' // Restore scroll position on navigation
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
