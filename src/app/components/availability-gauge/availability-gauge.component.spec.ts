import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityGaugeComponent } from './availability-gauge.component';

describe('AvailabilityGaugeComponent', () => {
  let component: AvailabilityGaugeComponent;
  let fixture: ComponentFixture<AvailabilityGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailabilityGaugeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailabilityGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
