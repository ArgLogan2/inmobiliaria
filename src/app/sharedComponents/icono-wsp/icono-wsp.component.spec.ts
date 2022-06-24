import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconoWspComponent } from './icono-wsp.component';

describe('IconoWspComponent', () => {
  let component: IconoWspComponent;
  let fixture: ComponentFixture<IconoWspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconoWspComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconoWspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
