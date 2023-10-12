import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { OrderImp } from 'src/app/components/interfaces/OrderImp';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root',
})
export class OrdersListService {
  constructor(private http : HttpClient) { }

getOrders(page:string,count:string,status:string):Observable<OrderImp[]>{
  return this.http.get<OrderImp[]>(`${environment.apiUrl}/orders?page=${page}&count=${count}&status=${status}`);  
}

}
