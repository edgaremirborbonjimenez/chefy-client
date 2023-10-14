import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderContentImp } from '../../types/HeaderContentImp';
import { Timestamp } from 'rxjs';
import { HeaderDetailOrderService } from './header-detail-order.service';

@Component({
  selector: 'app-header-detail-order',
  templateUrl: './header-detail-order.component.html',
  styleUrls: ['./header-detail-order.component.scss'],
  standalone: true,
  imports:[IonicModule],
})
export class HeaderDetailOrderComponent  implements OnInit {

  @Input() numOrder: number;
  @Input() date:Date;
  @Input() total:number;
  dateFormated:String;

  constructor(private headerDetailOrderService: HeaderDetailOrderService) { }

  ngOnInit() {
    this.formatDate();
  }

  formatDate(){
    this.dateFormated = this.headerDetailOrderService.formatDate(this.date);
  }

}
