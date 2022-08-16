import { Iclient } from "./iclient";
import { Warehous } from "./warehous";
export interface ISale {
   
    id? : number,
    Ref ?: string,
    client_id : number,
    client_name :string,
    warehouse_id : number,
    warehouse_name :Warehous,
    status : string,
    GrandTotal :number,
    paid_amount : number,
    payment_status :string,
    date: string,
    due : string,
    shipping : number,
    discount : number,
    tax_rate : number,
    notes : string

    // code : string,
    // created_by : string,
    // discount : number,
    // 
    // // client_id : Iclient,
    // // client_email :Iclient,
    // // client_tele :Iclient,
    // // client_code :Iclient,
    // // client_adr : Iclient,
    
    
    
    
    
}
