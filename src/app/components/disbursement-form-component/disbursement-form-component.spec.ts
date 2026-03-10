import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursementFormComponent } from './disbursement-form-component';

describe('DisbursementFormComponent', () => {
  let component: DisbursementFormComponent;
  let fixture: ComponentFixture<DisbursementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisbursementFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisbursementFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
