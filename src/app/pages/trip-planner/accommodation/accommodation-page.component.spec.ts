import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationPageComponent } from './accommodation-page.component';

describe('AccommodationPageComponent', () => {
  let component: AccommodationPageComponent;
  let fixture: ComponentFixture<AccommodationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccommodationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccommodationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
