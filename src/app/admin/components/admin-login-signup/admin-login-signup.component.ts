import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login-signup',
  templateUrl: './admin-login-signup.component.html',
  styleUrl: './admin-login-signup.component.scss'
})
export class AdminLoginSignupComponent {
  formGroup!: FormGroup;
  isLoginMode = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.initializeForm();
  }

  initializeForm() {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember: [false]
    });

    this.updateValidators();
  }

  updateValidators() {
    if (this.isLoginMode) {
      this.formGroup.get('remember')?.setValidators([Validators.required]);
    } else {
      this.formGroup.get('remember')?.clearValidators();
    }
    this.formGroup.get('remember')?.updateValueAndValidity();
  }

  toggleMode(event: Event) {
    event.preventDefault();
    this.isLoginMode = !this.isLoginMode;
    this.updateValidators();
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const formData = this.formGroup.value;

      if (this.isLoginMode) {
        console.log('Logging in:', formData);
        localStorage.setItem('isAuthenticated', 'true');
        this.router.navigate(['/admin-home']);


      } else {
        console.log('Signing up:', formData);
        this.isLoginMode = true;
      }
    }
  }
}