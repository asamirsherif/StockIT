import { Warehous } from './warehous';
import { Icurreny } from "./icurreny";
import { Iclient } from './iclient';
export interface Isetting {
    id?:number,
    client_id:Iclient  ,
    currency_id:Icurreny,
    warehouse_id:Warehous,
    email?:string,
    CompanyName?:string,
    CompanyPhone?:number,
    logo?:string,
    CompanyAddress?:string,
    footer?:string,
    developed_by?:string

}
 