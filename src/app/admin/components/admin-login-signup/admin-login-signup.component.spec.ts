import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginSignupComponent } from './admin-login-signup.component';

describe('AdminLoginSignupComponent', () => {
  let component: AdminLoginSignupComponent;
  let fixture: ComponentFixture<AdminLoginSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminLoginSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminLoginSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
