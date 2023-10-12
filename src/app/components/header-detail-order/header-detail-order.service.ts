import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderDetailOrderService {

  constructor() { }

  formatDate(date:Date):string{
    const format =  date.toLocaleString('en-US', 
    { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    console.log(format)
    return format;
  
  }
}
