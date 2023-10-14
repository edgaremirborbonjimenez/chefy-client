import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { OrderImp } from '../../types/OrderImp';
import { HeaderContentImp } from '../../types/HeaderContentImp';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DetailsOrderContainerService {

  order:OrderImp;

  constructor(private http : HttpClient) { }


getOrderByID(id:string): Observable<OrderImp>{
    return  this.http.get<OrderImp>(`${environment.apiUrl}/orders/${id}`);  
  }

}
