import { IPurchaseDetails } from "./ipurchase-details";

export interface IPurchase {
    id?: number,
    date: string,
    provider_id: number,
    warehouse_id: number,
    status?: string,
    notes?: string,
    purchaseDetails: Array<IPurchaseDetails>,
}
