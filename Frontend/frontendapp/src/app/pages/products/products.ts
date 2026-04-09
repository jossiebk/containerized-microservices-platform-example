import { Component } from '@angular/core';
import { ApiService } from '../../services/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  products: any[] = [];

  name = '';
  price: number = 0;

  constructor(private api: ApiService) {}

  loadProducts() {
    this.api.get(this.api.productsUrl).subscribe({
      next: (data: any) => {
        console.log('GET products:', data);
        this.products = data;
      },
      error: (err) => {
        console.error('GET products error:', err);
      }
    });
  }
}