import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { ProductInterface } from './products.interface';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<ProductInterface[]> {
  constructor(private productsService: ProductsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductInterface[]> {
    return this.productsService.getProducts();
  }
}
