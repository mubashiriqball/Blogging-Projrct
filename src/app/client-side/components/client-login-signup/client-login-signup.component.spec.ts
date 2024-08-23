import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLoginSignupComponent } from './client-login-signup.component';

describe('ClientLoginSignupComponent', () => {
  let component: ClientLoginSignupComponent;
  let fixture: ComponentFixture<ClientLoginSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientLoginSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientLoginSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
