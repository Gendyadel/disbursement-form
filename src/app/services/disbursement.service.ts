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
    create(item: Disbursement) {
        this.disbursements.update(list => [...list, item]);
    }

    /**
     * Removes a disbursement entry from the signal array.
     *
     * @param id - The ID of the disbursement to remove.
     */
    remove(id: string) {
        this.disbursements.update(list => list.filter(i => i.id !== id));
    }

    /**
     * Updates a disbursement entry in the signal array.
     *
     * @param item - One complete disbursement object to update.
     */
    update(item: Disbursement) {
        this.disbursements.update(list => list.map(i => i.id === item.id ? item : i));
    }
}
