import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class SideBarComponent  implements OnInit {
  pageTitle: string = "";

  constructor(private route: ActivatedRoute) {
    this.pageTitle = this.getCurrentPageTitle();
  }

  getCurrentPageTitle(): string {
    const routeSnapshot = this.route.snapshot;

    if (routeSnapshot.data && routeSnapshot.data["title"]) {
      return routeSnapshot.data["title"];
    }

    return "Default title";
  }

  ngOnInit() {}

}
