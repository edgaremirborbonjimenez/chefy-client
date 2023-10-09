import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailsOrderContainerComponent } from 'src/app/components/details-order-container/details-order-container.component';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.page.html',
  styleUrls: ['./order-info.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,DetailsOrderContainerComponent]
})
export class OrderInfoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
