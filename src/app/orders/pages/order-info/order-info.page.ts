import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.page.html',
  styleUrls: ['./order-info.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OrderInfoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
