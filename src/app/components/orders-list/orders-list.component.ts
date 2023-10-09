import { Component, OnInit } from '@angular/core';
import { OrderCardLiComponent } from '../order-card-li/order-card-li.component';
import { OrdersListService } from './orders-list.service'
import { OrderImp } from 'src/app/components/interfaces/OrderImp';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
  standalone: true,
  imports: [OrderCardLiComponent,CommonModule]
})
export class OrdersListComponent  implements OnInit {

  //orders:OrderImp[] = [];
  orders:OrderImp[];

  i:number = 1;

  constructor( private orderListService: OrdersListService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(){

    this.orderListService.getOrders('1','3','In Process')
    .subscribe({
      next: (response:OrderImp[])=>  {

        this.orders = response;
        console.log(this.orders);
      }
    })

  }

}
