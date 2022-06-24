import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalsPageComponent } from './appraisals-page.component';

describe('AppraisalsPageComponent', () => {
  let component: AppraisalsPageComponent;
  let fixture: ComponentFixture<AppraisalsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppraisalsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
