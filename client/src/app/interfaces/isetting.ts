import { Warehous } from './warehous';
import { Icurreny } from "./icurreny";
import { Iclient } from './iclient';
export interface Isetting {
    id?:number,
    client_id:Iclient  ,
    currency_id:Icurreny,
    warehouse_id:Warehous,
    email?:string,
    name?:string,
    phone?:number,
    image?:string,
    address?:string

}
 