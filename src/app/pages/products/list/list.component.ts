import { CardComponent } from 'src/app/shared/card/card.component';

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { ProductInterface } from '../products.interface';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: ProductInterface[] = [];

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.items = this.route.snapshot.data['items'];
  }

  getUpdatedData() {
    this.productsService.getProducts().subscribe((res: ProductInterface[]) => this.items = res);
  }
}
