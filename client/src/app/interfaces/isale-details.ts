import { Iclient } from "./iclient";
import { Warehous } from "./warehous";
import { IProduct } from "./iproduct";
import { Unit } from "./unit";
export interface ISaleDetails {
   
    id? : number,
    product : IProduct,
    quantity :number,
    total : number,
    price : number,
    unit : Unit;
    discount_method :string,
    date: string,
    Unit_price : string,
    shipping : number,
    discount : number,
    tax_rate : number,

    // client_id : number,
    // client_name :string,
    // warehouse_id : number,
    // warehouse_name :Warehous,
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
