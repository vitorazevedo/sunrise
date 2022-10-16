import { Routes } from '@angular/router';

import { ProductsResolver } from './products.resolver';

export const ProductsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        title: 'Sunrise - Products List',
        loadComponent: () => import('./list/list.component').then((c) => c.ListComponent),
        resolve: { items: ProductsResolver }
      },
      {
        path: 'detail/:id',
        title: 'Sunrise - Product Detail',
        loadComponent: () => import('./detail/detail.component').then((c) => c.DetailComponent)
      }
    ]
  }
];
