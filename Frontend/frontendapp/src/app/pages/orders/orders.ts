import { Component } from '@angular/core';
import { ApiService } from '../../services/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders {

  orders: any[] = [];

  userName: string = '';
  productName: string = '';
  quantity: number = 0;

  lastResponse: any = null;

  constructor(private api: ApiService) {}

  loadOrders() {
    this.api.get(this.api.ordersUrl).subscribe({
      next: (data: any) => {
        console.log('GET orders:', data);
        this.orders = data;
      },
      error: (err) => {
        console.error('GET orders error:', err);
      }
    });
  }

  createOrder() {
    const body = {
      userName: this.userName, 
      productName: this.productName,
      quantity: this.quantity
    };

    console.log('POST orders:', body);

    this.api.post(this.api.ordersUrl, body).subscribe({
      next: (response: any) => {
        console.log('POST response:', response);

        this.lastResponse = response;

        this.productName = '';
        this.quantity = 0;

        this.loadOrders();
      },
      error: (err) => {
        console.error('POST orders error:', err);
      }
    });
  }
}