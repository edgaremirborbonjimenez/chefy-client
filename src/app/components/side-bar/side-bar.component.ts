import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class SideBarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
