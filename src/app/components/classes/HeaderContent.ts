import { HeaderContentImp } from "../interfaces/HeaderContentImp";

export class HeaderContent implements HeaderContentImp{
    numOrder: string;
    dateOrder: Date;
    totalPrice: number;
constructor(numOrder:string,dateOrder:Date,totalPrice:number){
    this.numOrder = numOrder;
    this.dateOrder = dateOrder;
    this.totalPrice = totalPrice;

}
}