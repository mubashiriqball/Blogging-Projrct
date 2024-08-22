import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-to-admin',
  templateUrl: './contact-to-admin.component.html',
  styleUrl: './contact-to-admin.component.scss'
})
export class ContactToAdminComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]], // Minimum length validation for name
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.maxLength(50)]], // Maximum length validation for subject
      message: ['', [Validators.required, Validators.minLength(20)]], // Minimum length validation for message
    });
  }
   ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
  
    }
  }
}