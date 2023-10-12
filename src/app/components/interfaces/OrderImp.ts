import { Timestamp } from "rxjs";
import { Contact } from "./ContactImp";
import { Dishes } from "./DishesImp";

export interface OrderImp{
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    status: string;
    contact: Contact;
    dishes: Dishes[];





}