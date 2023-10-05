import { Contact } from "./Contact";

export interface Order{
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    status: string;
    contact: Contact;





}