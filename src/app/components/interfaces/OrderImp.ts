import { Timestamp } from "rxjs";
import { Contact } from "./ContactImp";
import { DishImp } from "./DishImp";

export interface OrderImp{
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    status: string;
    contact: Contact;
    dishes: DishImp[];





}