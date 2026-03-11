import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DisbursementService } from '../../services/disbursement.service';
import { Disbursement } from '../../models/disbursement.model';
import { generateUuid } from '../../utils/id.util';

@Component({
  selector: 'app-disbursement-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './disbursement-form-component.html',
  styleUrl: './disbursement-form-component.scss',
})
export class DisbursementFormComponent implements OnChanges {
  readonly fb = inject(FormBuilder);
  readonly service = inject(DisbursementService);

  item = input<Disbursement | null>(null);
  @Output() goToReview = new EventEmitter<void>();

  form!: FormGroup;

  constructor() {
    this._initForm();
  }
  ngOnChanges(): void {
    const item = this.item();
    if (item) {
      this.form.patchValue(item);
    }
  }

  private _initForm() {
    this.form = this.fb.group({
      id: [null],
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
    this._handleSubmission();
    this.form.reset();
  }

  proceed() {
    this._handleSubmission();
    this.goToReview.emit();
  }

  private _handleSubmission() {
    if (this.form.invalid) return;
    const disbursementData: Disbursement = this.form.value;

    if (disbursementData.id) {
      this.service.update(disbursementData);
    } else {
      disbursementData.id = generateUuid(); // Assign a unique ID for new entries
      this.service.create(disbursementData);
    }
  }
}

