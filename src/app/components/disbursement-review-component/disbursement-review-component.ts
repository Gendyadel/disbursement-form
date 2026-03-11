import { CommonModule } from '@angular/common';
import { Component, computed, inject, output } from '@angular/core';
import { DisbursementService } from '../../services/disbursement.service';
import { Disbursement } from '../../models/disbursement.model';

@Component({
  selector: 'app-disbursement-review',
  imports: [CommonModule],
  templateUrl: './disbursement-review-component.html',
  styleUrl: './disbursement-review-component.scss',
})
export class DisbursementReviewComponent {
  readonly service = inject(DisbursementService);

  editChange = output<Disbursement>();

  items = computed(() => this.service.disbursements());

  remove(item: Disbursement) {
    this.service.remove(item.id);
  }

  edit(item: Disbursement) {
    this.editChange.emit(item);
  }
}
