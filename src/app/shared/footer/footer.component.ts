import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  navs = [
    { title: 'Quick Links', buttons: ['Homepage', 'Roaming Information', 'Service Fees', 'Report Fraud', 'Device Repair'] },
    { title: 'Offers', buttons: ['Mobile Plans', 'Prepaid SIM', 'Internet at Home', '5G Speed Option', 'Saving options', 'Wi-Fi Calling'] },
    { title: 'My yallo', buttons: ['Account Login', 'My Products', 'Usage History', 'Past Invoices', 'Settings'] },
    { title: 'About yallo', buttons: ['Company', 'Media Center', 'Review & Awards', 'Business Customers', 'Reseller Login'] },
  ];
}
