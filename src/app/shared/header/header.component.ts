import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  nav: string[] = ['Overview', 'Mobile', 'Internet', 'TV', 'Support'];
  active: number = 0;

  isActive(index: number) {
    return this.active === index;
  }

  setActive(index: number) {
    this.active = index;
  }

}
