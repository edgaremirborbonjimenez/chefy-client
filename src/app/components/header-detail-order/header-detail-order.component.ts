import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderContentImp } from '../interfaces/HeaderContentImp';
import { HeaderContent } from '../classes/HeaderContent';

@Component({
  selector: 'app-header-detail-order',
  templateUrl: './header-detail-order.component.html',
  styleUrls: ['./header-detail-order.component.scss'],
  standalone: true,
  imports:[IonicModule],
})
export class HeaderDetailOrderComponent  implements OnInit {

@Input() headerData:HeaderContent;

  constructor() { }

  ngOnInit() {
  }

}
