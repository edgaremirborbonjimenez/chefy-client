import { Component, OnInit } from '@angular/core';
import { HeaderDetailOrderComponent } from '../header-detail-order/header-detail-order.component';
import { DetailsOrderContainerService } from './details-order-container.service';
import { OrderImp } from '../interfaces/OrderImp';
import { HeaderContentImp } from '../interfaces/HeaderContentImp';
import { HeaderContent } from '../classes/HeaderContent';

@Component({
  selector: 'app-details-order-container',
  templateUrl: './details-order-container.component.html',
  styleUrls: ['./details-order-container.component.scss'],
  standalone: true,
  imports: [HeaderDetailOrderComponent]
})
export class DetailsOrderContainerComponent  implements OnInit {

  headerContent:HeaderContent;

  constructor(private detailsOrderContainerService:DetailsOrderContainerService) { }

  ngOnInit() {}

  getOrders(){
    this.headerContent = this.detailsOrderContainerService.getHeaderData();
    console.log(this.headerContent);
  }

}
