export interface IPurchaseDetails {
    id?: number,
    cost: number,
    purchase_unit_id: number,
    TaxNet: number,
    tax_method: string,
    discount: number,
    discount_method: string,
    purchase_id: number,
    product_variant_id?: number,
    total: number,
    quantity: number
}
