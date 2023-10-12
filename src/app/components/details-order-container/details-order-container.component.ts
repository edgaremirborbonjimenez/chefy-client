import { Component, OnInit } from '@angular/core';
import { HeaderDetailOrderComponent } from '../header-detail-order/header-detail-order.component';
import { DetailsOrderContainerService } from './details-order-container.service';
import { OrderImp } from '../interfaces/OrderImp';
import { HeaderContentImp } from '../interfaces/HeaderContentImp';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-order-container',
  templateUrl: './details-order-container.component.html',
  styleUrls: ['./details-order-container.component.scss'],
  standalone: true,
  imports: [HeaderDetailOrderComponent,CommonModule]
})
export class DetailsOrderContainerComponent  implements OnInit {

  order:OrderImp;

  constructor(private detailsOrderContainerService:DetailsOrderContainerService) { }

  ngOnInit() {
    this.getOrder();
  }

  getOrder(){
    
    this.detailsOrderContainerService.getOrderByID('482e7a44-f81a-4a02-8018-98f835bd3225')
    .subscribe({
      next: (response:OrderImp)=>  {
        console.log(response.createdAt);
        this.order = response;

      }
    })
  }


}
