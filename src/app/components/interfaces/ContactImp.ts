import { Address } from "./AddressImp";

export interface Contact{
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    name:string;
    phoneNumber:string;
    address?: Address
}