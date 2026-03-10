import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursementWrapper } from './disbursement-wrapper';

describe('DisbursementWrapper', () => {
  let component: DisbursementWrapper;
  let fixture: ComponentFixture<DisbursementWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisbursementWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisbursementWrapper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
