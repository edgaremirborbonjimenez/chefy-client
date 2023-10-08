import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Order } from '../classes/Order';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-order-card-li',
  templateUrl: './order-card-li.component.html',
  styleUrls: ['./order-card-li.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule]
})
export class OrderCardLiComponent  implements OnInit {

  @Input() order: Order;
  @Input() nOrder:number;
  total:number=0;

  constructor() { }

  ngOnInit() {
    this.calculateTotal();
  }

  calculateTotal(){
    for(const dish of this.order.dishes ){
      let p =  +dish.price  ;
      this.total+=(p*dish.quantity);
  }
  }

}
