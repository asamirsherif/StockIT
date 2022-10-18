import { Warehous } from './warehous';
import { Icurreny } from "./icurreny";
import { Iclient } from './iclient';
export interface Isetting {
    id?: number,
    client_id?: number,
    client?: Iclient,
    currency_id?: number,
    currency?: Icurreny,
    warehouse_id?: number,
    warehouse?: Warehous,
    email?: string,
    CompanyName?: string,
    CompanyPhone?: number,
    logo?: string,
    CompanyAddress?: string,
    footer?: string,
    developed_by?: string

}
