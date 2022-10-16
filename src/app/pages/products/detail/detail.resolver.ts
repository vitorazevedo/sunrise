import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { ProductInterface } from '../products.interface';
import { ProductsService } from '../products.service';

@Injectable({
  providedIn: 'root'
})
export class DetailResolver implements Resolve<ProductInterface> {
  constructor(private productsService: ProductsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductInterface> {
    const id: string = route.params['id'];
    return this.productsService.getProductById(id);
  }
}
