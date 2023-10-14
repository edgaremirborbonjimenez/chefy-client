import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailsOrderContainerComponent } from 'src/app/components/details-order-container/details-order-container.component';
import { OrdersService } from './orders.service';
import { UpdateOrderDTO } from '../../../types/update-order';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.page.html',
  styleUrls: ['./order-info.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,DetailsOrderContainerComponent]
})
export class OrderInfoPage implements OnInit {

  idOrder:string

  constructor(private orderService:OrdersService,private router:Router) { }

  ngOnInit() {
  }

  setIdOrder(idOrder:string){
  this.idOrder = idOrder;
  }

  acceptOrder(){
    this.orderService.updateOrder(this.idOrder,new UpdateOrderDTO('Accepted'));
    this.goToOrder();

  }

  rejectOrder(){
    this.orderService.updateOrder(this.idOrder,new UpdateOrderDTO('Rejected'));
    this.goToOrder();
  }

  goToOrder(){
    this.router.navigate(['orders/']);
      }

}
