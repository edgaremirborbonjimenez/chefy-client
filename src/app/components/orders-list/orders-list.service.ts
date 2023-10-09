import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { OrderImp } from 'src/app/components/interfaces/OrderImp';



@Injectable({
  providedIn: 'root',
})
export class OrdersListService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http : HttpClient) { }

getOrders(page:string,count:string,status:string):Observable<OrderImp[]>{
  return this.http.get<OrderImp[]>(`${this.BASE_URL}/orders?page=${page}&count=${count}&status=${status}`);  
}

}
