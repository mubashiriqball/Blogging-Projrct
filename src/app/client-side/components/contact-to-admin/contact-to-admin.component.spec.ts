import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactToAdminComponent } from './contact-to-admin.component';

describe('ContactToAdminComponent', () => {
  let component: ContactToAdminComponent;
  let fixture: ComponentFixture<ContactToAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactToAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactToAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
