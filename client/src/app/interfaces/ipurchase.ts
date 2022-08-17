import { IPurchaseDetails } from "./ipurchase-details";

export interface IPurchase {
    id?: number,
    user_id?:number,
    date: string,
    provider_id: number,
    warehouse_id: number,
    status?: string,
    notes?: string,
    tax_rate?:number,
    TaxNet?:number,
    discount?:number,
    shipping?:number,
    GrandTotal:number,
    paid_amount:number,
    purchaseDetails: Array<IPurchaseDetails>,
}
