import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  blog = {
    id: 0,
    title: '',
    content: '',
    author: '',
    publishDate: new Date(),
    imageUrl: '',
    tags: [] as string[]  // Explicitly declare the type as an array of strings
  };

  constructor() { }

  ngOnInit(): void {
    this.blog = {
      id: 1,
      title: 'Managing Your Blog in the Admin Dashboard',
      content: 'This is an example blog post to showcase how to manage blogs within the admin dashboard.',
      author: 'Admin',
      publishDate: new Date(),
      imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D',
      tags: ['Admin', 'Dashboard', 'Blog']  // No error here now
    };
  }

}
