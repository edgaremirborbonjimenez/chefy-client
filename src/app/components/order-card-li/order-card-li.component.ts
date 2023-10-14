import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { OrderImp } from '../../types/OrderImp';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-card-li',
  templateUrl: './order-card-li.component.html',
  styleUrls: ['./order-card-li.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule]
})
export class OrderCardLiComponent  implements OnInit {

  @Input() order: OrderImp;
  @Input() nOrder:number;
  total:number=0;

  constructor(private readonly router: Router) { }

  ngOnInit() {
    this.calculateTotal();
  }

  calculateTotal(){
    for(const dish of this.order.dishes ){
      let p =  +dish.price  ;
      this.total+=(p*dish.quantity);
  }
  }

  goOrderInfo(){
this.router.navigate(['orders/info',this.order.id]);
    

  }

}
