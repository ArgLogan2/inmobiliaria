import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentOwnerPageComponent } from './rent-owner-page.component';

describe('RentOwnerPageComponent', () => {
  let component: RentOwnerPageComponent;
  let fixture: ComponentFixture<RentOwnerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentOwnerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentOwnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
