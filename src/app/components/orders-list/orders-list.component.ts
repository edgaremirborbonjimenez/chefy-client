import { Component, OnInit } from '@angular/core';
import { OrderCardLiComponent } from '../order-card-li/order-card-li.component';
import { OrdersListService } from './orders-list.service'
import { Order } from 'src/app/interfaces/Order';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
  standalone: true,
  imports: [OrderCardLiComponent]
})
export class OrdersListComponent  implements OnInit {

  orders:Order[] = [];

  constructor( private orderListService: OrdersListService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(){

    this.orderListService.getOrders()
    .subscribe({
      next: res=>{
        console.log(res);
      }
    })

  }

}
