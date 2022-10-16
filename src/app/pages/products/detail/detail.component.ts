import { CardComponent } from 'src/app/shared/card/card.component';

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductInterface } from '../products.interface';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  item: ProductInterface = { type: '', avatar: '', name: '', id: '' };

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.productsService.getProductById(params.id).subscribe((res: ProductInterface) => this.item = res);
    });
  }

}
