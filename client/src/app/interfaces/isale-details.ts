import { IProduct } from "./iproduct";

export interface ISaleDetails {
    id?: number,
    product_id:number,
    price: number,
    quantity: number,
    sale_unit_id: number,
    TaxNet: number,
    tax_method: string,
    discount?: number,
    discount_method?: string,
    product_variant_id?: number,
    total: number,
    product:IProduct
}
