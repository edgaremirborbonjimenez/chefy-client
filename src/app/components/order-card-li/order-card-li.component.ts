import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-order-card-li',
  templateUrl: './order-card-li.component.html',
  styleUrls: ['./order-card-li.component.scss'],
  standalone: true,
  imports: [IonicModule,]
})
export class OrderCardLiComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
