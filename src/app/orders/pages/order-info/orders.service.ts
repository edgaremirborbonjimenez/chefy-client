import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderImp } from 'src/app/types/OrderImp';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SearchOrdersParamsDTO } from 'src/app/types/search-orders';
import { UpdateOrderDTO } from 'src/app/types/update-order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private http: HttpClient
  ) { }

  getOrders(params: SearchOrdersParamsDTO):Observable<OrderImp[]>{
    return this.http.get<OrderImp[]>(`${environment.apiUrl}/orders`, { params: <any> params});
  }

  
  updateOrder(id: string, order: UpdateOrderDTO): Observable<OrderImp>{
    return this.http.patch<OrderImp>(`${environment.apiUrl}/orders/${id}`, {param: <any> order});
  }
}
