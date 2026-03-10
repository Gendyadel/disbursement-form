import { Component, signal } from '@angular/core';
import { DisbursementFormComponent } from '../disbursement-form-component/disbursement-form-component';
import { DisbursementReviewComponent } from '../disbursement-review-component/disbursement-review-component';
import { CommonModule } from '@angular/common';
import { Tabs } from '../../models/tabs.enum';

@Component({
  selector: 'app-disbursement-wrapper',
  standalone: true,
  imports: [CommonModule, DisbursementFormComponent, DisbursementReviewComponent],
  templateUrl: './disbursement-wrapper.html',
})

export class ParentComponent {
  readonly tabsEnum = Tabs; // Expose enum to template for comparison

  tab = signal<Tabs>(Tabs.Form);

  toggleTab(tabId: Tabs) {
    this.tab.update(current => current === tabId ? current : tabId);
  }
} 