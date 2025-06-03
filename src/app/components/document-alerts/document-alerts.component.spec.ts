import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentAlertsComponent } from './document-alerts.component';

describe('DocumentAlertsComponent', () => {
  let component: DocumentAlertsComponent;
  let fixture: ComponentFixture<DocumentAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentAlertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
