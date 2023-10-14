import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { HeaderDetailOrderComponent } from '../header-detail-order/header-detail-order.component';
import { DetailsOrderContainerService } from './details-order-container.service';
import { OrderImp } from '../../types/OrderImp';
import { HeaderContentImp } from '../../types/HeaderContentImp';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DetailDishCardComponent } from '../detail-dish-card/detail-dish-card.component';
import { ContactInfoComponent } from '../contact-info/contact-info.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-order-container',
  templateUrl: './details-order-container.component.html',
  styleUrls: ['./details-order-container.component.scss'],
  standalone: true,
  imports: [HeaderDetailOrderComponent,DetailDishCardComponent,ContactInfoComponent,CommonModule,IonicModule]
})
export class DetailsOrderContainerComponent  implements OnInit {

  @Output() idOrderEventEmit = new EventEmitter<string>();
  order:OrderImp;
  idOrder:string;

  constructor(private detailsOrderContainerService:DetailsOrderContainerService,private activedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.idOrder = this.activedRoute.snapshot.params['id'];
    console.log(this.idOrder);
    this.getOrder();

  }

  passIdOrder(){
    this.idOrderEventEmit.emit(this.order.id);
  }

  getOrder(){
    console.log(this.idOrder);
    this.detailsOrderContainerService.getOrderByID(this.idOrder)
    .subscribe({
      next: (response:OrderImp)=>  {        
        this.order = response;
        this.passIdOrder();
        this.order.createdAt = new Date(response.createdAt);
        this.order.updatedAt = new Date(response.updatedAt);


      }
    })

  }


}
