import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMyblogsComponent } from './admin-myblogs.component';

describe('AdminMyblogsComponent', () => {
  let component: AdminMyblogsComponent;
  let fixture: ComponentFixture<AdminMyblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminMyblogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminMyblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
