import { IProduct } from "./iproduct";

export interface ISaleDetails {
    id?: number,
    product_id:number,
    unit_price: number,
    quantity: number,
    sale_unit_id: number,
    tax_percent: number,
    tax_method: string,
    discount?: number,
    discount_method?: string,
    product_variant_id?: number,
    subtotal: number,
    product:IProduct
}
