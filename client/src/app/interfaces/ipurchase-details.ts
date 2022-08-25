import { IProduct } from "./iproduct";

export interface IPurchaseDetails {
    id?: number,
    product_id:number,
    cost: number,
    quantity: number,
    purchase_unit_id: number,
    TaxNet: number,
    tax_method: string,
    discount?: number,
    discount_method?: string,
    product_variant_id?: number,
    total: number,
    product:IProduct
}
