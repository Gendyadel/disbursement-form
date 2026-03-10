import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DisbursementService } from '../../services/disbursement.service';

@Component({
  selector: 'app-disbursement-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './disbursement-form-component.html',
  styleUrl: './disbursement-form-component.scss',
})
export class DisbursementFormComponent {
  readonly fb = inject(FormBuilder);
  readonly service = inject(DisbursementService);

  @Output() goToReview = new EventEmitter<void>();

  form!: FormGroup;

  constructor() {
    this._initForm();
  }

  private _initForm() {
    this.form = this.fb.group({
      forSelf: [true],
      programName: ['', Validators.required],
      disbursementDate: ['', Validators.required],
      geographicScope: ['', Validators.required],
      emirate: ['', Validators.required],
      type: ['', Validators.required],
      amount: ['', Validators.required],
      source: ['', Validators.required],
      receiverRole: ['', Validators.required],
      receiverType: ['', Validators.required],
      receiverName: ['', Validators.required],
      receiverContact: ['', Validators.required],
      receiverEmail: ['']
    });
  }

  saveAndAddNew() {
    if (this.form.invalid) return;

    this.service.addDisbursement(this.form.value);
    this.form.reset({ forSelf: true }); // keep default
  }

  proceed() {
    if (this.form.invalid) return;

    // Save current form once before reviewing
    this.service.addDisbursement(this.form.value);
    this.goToReview.emit();
  }
}

