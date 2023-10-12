import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderDetailOrderService {

  constructor() { }

  formatDate(dateString:Date):string{

  const date = new Date(dateString);
  return date.toLocaleString();
  }
}
