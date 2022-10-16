import { Routes } from '@angular/router';

import { DetailResolver } from './detail/detail.resolver';
import { ListResolver } from './list/list.resolver';

export const ProductsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        title: 'Sunrise - Products List',
        loadComponent: () => import('./list/list.component').then((c) => c.ListComponent),
        resolve: { items: ListResolver }
      },
      {
        path: 'detail/:id',
        title: 'Sunrise - Product Detail',
        loadComponent: () => import('./detail/detail.component').then((c) => c.DetailComponent),
        resolve: { item: DetailResolver }
      }
    ]
  }
];
