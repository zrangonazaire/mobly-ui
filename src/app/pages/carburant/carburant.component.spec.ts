import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarburantComponent } from './carburant.component';

describe('CarburantComponent', () => {
  let component: CarburantComponent;
  let fixture: ComponentFixture<CarburantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarburantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarburantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
