import { Component, OnInit,Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ContactInfoComponent  implements OnInit {


@Input() name:string;
@Input() phoneNumber:string;
@Input() address:string;
@Input() zip:string;

  constructor() { }

  ngOnInit() {



  }

}
