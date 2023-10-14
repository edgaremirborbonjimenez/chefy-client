import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../../environments/environment';
import { OrderImp } from 'src/app/types/OrderImp';



@Injectable({
  providedIn: 'root',
})
export class OrdersListService {
  constructor(private http : HttpClient) { }

getOrders(page:string,count:string,status:string):Observable<OrderImp[]>{
  return this.http.get<OrderImp[]>(`${environment.apiUrl}/orders?page=${page}&count=${count}&status=${status}`);  
}

}
