import { Component, OnInit,Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DishImp } from '../../types/DishImp';

@Component({
  selector: 'app-detail-dish-card',
  templateUrl: './detail-dish-card.component.html',
  styleUrls: ['./detail-dish-card.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class DetailDishCardComponent  implements OnInit {

  @Input() dish:DishImp;

  constructor() { }

  ngOnInit() {}

}
