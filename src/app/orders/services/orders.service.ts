import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/interfaces/Order';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SearchOrdersParamsDTO } from '../order-request-dto/search-orders';
import { UpdateOrderDTO } from '../order-request-dto/update-order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private http: HttpClient
  ) { }

  getOrders(params: SearchOrdersParamsDTO):Observable<Order[]>{
    return this.http.get<Order[]>(`${environment.apiUrl}/orders`, { params: <any> params});
  }

  
  updateOrder(id: string, order: UpdateOrderDTO): Observable<Order>{
    return this.http.patch<Order>(`${environment.apiUrl}/orders/${id}`, {param: <any> order});
  }
}
