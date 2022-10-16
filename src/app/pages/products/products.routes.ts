import { Routes } from '@angular/router';

export const ProductsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        title: 'Sunrise - Products List',
        loadComponent: () => import('./list/list.component').then((c) => c.ListComponent)
      },
      {
        path: 'detail',
        title: 'Sunrise - Product Detail',
        loadComponent: () => import('./detail/detail.component').then((c) => c.DetailComponent)
      }
    ]
  }
];
