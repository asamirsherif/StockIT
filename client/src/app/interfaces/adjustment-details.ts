import { IProduct } from "./iproduct";

export interface IAdjustmentDetails {
    id?: number,
    adjustment_id?: number,
    quantity: number,
    product_id: number,
    product?: IProduct,
    type: string,
}
