import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  totalBlogs: number = 150; // Replace with your dynamic data
  totalClients: number = 80; // Replace with your dynamic data
  publishedBlogs: number = 120; // Replace with your dynamic data
  pendingBlogs: number = 30; // Replace with your dynamic data

}
