import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrl: './home-nav.component.scss'
})
export class HomeNavComponent {
  constructor(private router: Router) { }

  navigateToAdminLogin(): void {
    this.router.navigate(['/admin/admin-login-signup']);
  }

  navigateToClientLogin(): void {
    this.router.navigate(['/client/client-login-signup']);
  }

  navigateToAdminSignUp(): void {
    this.router.navigate(['/admin/admin-signup']);
  }

  navigateToClientSignUp(): void {
    this.router.navigate(['/client/client-signup']);
  }
}
