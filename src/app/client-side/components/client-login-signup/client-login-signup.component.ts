import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-login-signup',
  templateUrl: './client-login-signup.component.html',
  styleUrl: './client-login-signup.component.scss'
})
export class ClientLoginSignupComponent {
  formGroup!: FormGroup;
  isLoginMode = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.initializeForm();
  }

  initializeForm() {
    this.formGroup = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember: [false]
    });
  }

  toggleMode(event: Event) {
    event.preventDefault();
    this.isLoginMode = !this.isLoginMode;

    if (this.isLoginMode) {
      this.formGroup.get('firstName')?.clearValidators();
      this.formGroup.get('lastName')?.clearValidators();
      this.formGroup.get('remember')?.setValidators([Validators.required]);
    } else {
      this.formGroup.get('firstName')?.setValidators([Validators.required]);
      this.formGroup.get('lastName')?.setValidators([Validators.required]);
      this.formGroup.get('remember')?.clearValidators();
    }

    this.formGroup.get('firstName')?.updateValueAndValidity();
    this.formGroup.get('lastName')?.updateValueAndValidity();
    this.formGroup.get('remember')?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const formData = this.formGroup.value;
      if (this.isLoginMode) {
        console.log('Logging in:', formData);
        this.router.navigate(['/client-home']);
      } else {
        console.log('Signing up:', formData);
        this.isLoginMode = true;
      }
    }
  }
}
