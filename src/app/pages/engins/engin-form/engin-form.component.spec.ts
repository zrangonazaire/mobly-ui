import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginFormComponent } from './engin-form.component';

describe('EnginFormComponent', () => {
  let component: EnginFormComponent;
  let fixture: ComponentFixture<EnginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnginFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
