import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursementReviewComponent } from './disbursement-review-component';

describe('DisbursementReviewComponent', () => {
  let component: DisbursementReviewComponent;
  let fixture: ComponentFixture<DisbursementReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisbursementReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisbursementReviewComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
