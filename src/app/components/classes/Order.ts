import { Contact } from '../interfaces/ContactImp';
import { Dishes } from '../interfaces/DishesImp';
import { OrderImp} from '../interfaces/OrderImp';

export class Order implements OrderImp{
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    status: string;
    contact: Contact;
    dishes: Dishes[];

    constructor(id:string,createdAt:Date,updatedAt:Date,status:string,contact:Contact,dishes:Dishes[]){

        this._id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.status = status;
        this.contact = contact;
        this.dishes = dishes;

    }
}