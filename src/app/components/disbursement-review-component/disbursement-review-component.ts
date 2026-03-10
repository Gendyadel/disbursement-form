import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { DisbursementService } from '../../services/disbursement.service';

@Component({
  selector: 'app-disbursement-review',
  imports: [CommonModule],
  templateUrl: './disbursement-review-component.html',
  styleUrl: './disbursement-review-component.scss',
})
export class DisbursementReviewComponent {
  readonly service = inject(DisbursementService);

  items = computed(() => this.service.disbursements());

}
