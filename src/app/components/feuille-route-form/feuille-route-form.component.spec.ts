import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuilleRouteFormComponent } from './feuille-route-form.component';

describe('FeuilleRouteFormComponent', () => {
  let component: FeuilleRouteFormComponent;
  let fixture: ComponentFixture<FeuilleRouteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeuilleRouteFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeuilleRouteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
