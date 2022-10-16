import { Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'products',
        loadChildren: () => import('./products/products.routes').then(r => r.ProductsRoutes)
      }
    ]
  }
];
