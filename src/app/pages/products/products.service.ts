import { map, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ProductInterface } from './products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ProductInterface[]> {
    return this.httpClient.get('https://61f12139072f86001749f044.mockapi.io/api/v1/animals').pipe(map((res: any) => res.items));
  }

  getProductById(id: string): Observable<ProductInterface> {
    return this.httpClient.get(`https://61f12139072f86001749f044.mockapi.io/api/v1/animals/${id}`).pipe(map((res: any) => res));
  }
}
