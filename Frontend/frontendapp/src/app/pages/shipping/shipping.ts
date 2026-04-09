import { Component } from '@angular/core';
import { ApiService } from '../../services/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shipping.html',
  styleUrl: './shipping.css'
})
export class Shipping {

  shippings: any[] = [];

  city: string = '';
  weight: number = 0;

  shippingResult: any = null;

  constructor(private api: ApiService) {}

  loadShipping() {
    this.api.get(this.api.shippingUrl).subscribe({
      next: (data: any) => {
        console.log('GET shipping:', data);
        this.shippings = data;
      },
      error: (err) => {
        console.error('GET shipping error:', err);
      }
    });
  }

  createShipping() {
    const body = {
      city: this.city,
      weight: this.weight
    };

    console.log('POST shipping:', body);

    this.api.post(this.api.shippingUrl+"/calculate", body).subscribe({
      next: (response: any) => {
        console.log('POST response:', response);

        this.shippingResult = response;

        this.city = '';
        this.weight = 0;

        this.loadShipping();
      },
      error: (err) => {
        console.error('POST shipping error:', err);
      }
    });
  }
}