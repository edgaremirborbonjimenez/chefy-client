import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'orders',
    pathMatch: 'full',
  },
  {
    path: 'orders',
    loadComponent: () => import('./orders/pages/all-orders/all-orders.page').then( m => m.AllOrdersPage)
  }
];
