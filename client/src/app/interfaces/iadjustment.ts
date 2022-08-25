import { IAdjustmentDetails } from "./adjustment-details";

export interface Iadjustment {
    id?: number,
    warehouse_id: number,
    user_id?: number,
    date: string,
    notes?:string,
    items?:number,
    details?:Array<IAdjustmentDetails>
}
