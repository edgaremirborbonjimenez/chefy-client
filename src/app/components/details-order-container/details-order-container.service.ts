import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { OrderImp } from '../interfaces/OrderImp';
import { HeaderContentImp } from '../interfaces/HeaderContentImp';
import { HeaderContent } from '../classes/HeaderContent';


@Injectable({
  providedIn: 'root'
})
export class DetailsOrderContainerService {

  BASE_URL: string = 'http://localhost:3000';
  orders:OrderImp[];

  constructor(private http : HttpClient) { }

/*
  TODO: Poner implementacion de busqueda por ID

getOrders(page:string,count:string,status:string){
    const ordersdb = this.http.get<OrderImp[]>(`${this.BASE_URL}/orders?page=${page}&count=${count}&status=${status}`);  

    ordersdb.subscribe({
      next: (res:OrderImp[])=>{

        this.orders = res;

      }
    })
  }*/

  getHeaderData():HeaderContent{
    
    const hc = new HeaderContent('1',new Date(),720);
    return hc;

  }
}
