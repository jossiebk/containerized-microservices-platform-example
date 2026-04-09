import { Component } from '@angular/core';
import { ApiService } from '../../services/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  cartItems: any[] = [];

  productName: string = '';
  quantity: number = 0;

  lastResponse: any = null;

  constructor(private api: ApiService) {}

  loadCart() {
    this.api.get(this.api.cartUrl).subscribe({
      next: (data: any) => {
        console.log('GET cart:', data);
        this.cartItems = data;
      },
      error: (err) => {
        console.error('GET cart error:', err);
      }
    });
  }

  addToCart() {
    const body = {
      productName: this.productName,
      quantity: this.quantity
    };

    console.log('POST cart:', body);

    this.api.post(this.api.cartUrl, body).subscribe({
      next: (response: any) => {
        console.log('POST response:', response);

        this.lastResponse = response;

        this.productName = '';
        this.quantity = 0;

        this.loadCart();
      },
      error: (err) => {
        console.error('POST cart error:', err);
      }
    });
  }
}