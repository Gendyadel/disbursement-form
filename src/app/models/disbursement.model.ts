export interface Disbursement {
    id: string; // Unique identifier for each disbursement
    programName: string;
    disbursementDate: string;
    geographicScope: string;
    emirate: string;
    type: string;
    amount: number;
    source: string;
    receiverRole: string;
    receiverType: string;
    receiverName: string;
    receiverContact: string;
    receiverEmail?: string;
}
