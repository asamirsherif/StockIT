import { AnyRecordWithTtl } from "dns";
import { Iclient } from "./iclient";
import { ISaleDetails } from "./isale-details";
import { Warehous } from "./warehous";
export interface ISale {
   
    id? : number,
    user_id?:number,
    Ref ?: string,
    status : string,
    GrandTotal :number,
    paid_amount : number,
    payment_status :string,
    date: string,
    due : string,
    shipping : number,
    discount : number,
    tax_rate : number,
    notes : string,
    client? :Iclient,
    client_id: number,
    warehouse_name? :Warehous,
    warehouse_id: number,
    details: Array<ISaleDetails>,
    payment: any,
    
}
