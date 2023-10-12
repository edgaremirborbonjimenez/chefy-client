import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { OrderImp } from '../interfaces/OrderImp';
import { HeaderContentImp } from '../interfaces/HeaderContentImp';


@Injectable({
  providedIn: 'root'
})
export class DetailsOrderContainerService {

  BASE_URL: string = 'http://localhost:3000';
  order:OrderImp;

  constructor(private http : HttpClient) { }


getOrderByID(id:string): Observable<OrderImp>{
    return  this.http.get<OrderImp>(`${this.BASE_URL}/orders/${id}`);  
  }

}
