import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrdersListComponent } from 'src/app/components/orders-list/orders-list.component';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.page.html',
  styleUrls: ['./all-orders.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, OrdersListComponent]
})
export class AllOrdersPage implements OnInit {
  title: string = "Orders";

  constructor() { }

  ngOnInit() {
  }

}
