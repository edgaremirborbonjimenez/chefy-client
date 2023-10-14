import { Timestamp } from "rxjs";
import { AddressImp } from "./AddressImp";

export interface Contact{
    _id?: string;
    createdAt?: Timestamp<Date>;
    updatedAt?: Timestamp<Date>;
    name:string;
    phoneNumber:string;
    address: AddressImp
}