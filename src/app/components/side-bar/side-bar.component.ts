import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouteReuseStrategy, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink]
})
export class SideBarComponent  implements OnInit {

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(["/orders"])
  }

  ngOnInit() {}

}
