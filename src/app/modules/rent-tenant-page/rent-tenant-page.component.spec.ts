import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentTenantPageComponent } from './rent-tenant-page.component';

describe('RentTenantPageComponent', () => {
  let component: RentTenantPageComponent;
  let fixture: ComponentFixture<RentTenantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentTenantPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentTenantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
