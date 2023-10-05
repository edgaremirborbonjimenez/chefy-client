import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Order } from 'src/app/interfaces/Order';



@Injectable({
  providedIn: 'root',
})
export class OrdersListService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http : HttpClient) { }

getOrders():Observable<Order[]>{
  return this.http.get<Order[]>(`${this.BASE_URL}/orders?page=1&count=3&status=In Process`);  
}

}
