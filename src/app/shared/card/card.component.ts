import { ProductInterface } from 'src/app/pages/products/products.interface';

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data: ProductInterface = { name: '', type: '', avatar: '', id: '' };
  @Input() type = '';
}
