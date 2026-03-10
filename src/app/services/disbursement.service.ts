import { Injectable, signal } from "@angular/core";
import { Disbursement } from "../models/disbursement.model";

@Injectable({ providedIn: 'root' })
export class DisbursementService {

    /**
       * Main list of disbursements.
       * Signal allows automatic UI updates in components that consume it.
       */
    disbursements = signal<Disbursement[]>([]);


    /**
     * Adds a new disbursement entry to the signal array.
     * Ensures immutability by spreading the previous array.
     *
     * @param item - One complete disbursement object from the form.
     */
    addDisbursement(item: Disbursement) {
        this.disbursements.update(list => [...list, item]);
    }
}
