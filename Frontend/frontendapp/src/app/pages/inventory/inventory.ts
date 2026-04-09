import { Component } from '@angular/core';
import { ApiService } from '../../services/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css'
})
export class Inventory {

  inventory: any[] = [];

  productName: string = '';
  quantity: number = 0;

  lastResponse: any = null;

  constructor(private api: ApiService) {}

  loadInventory() {
    this.api.get(this.api.inventoryUrl).subscribe({
      next: (data: any) => {
        console.log('GET inventory:', data);
        this.inventory = data;
      },
      error: (err) => {
        console.error('GET inventory error:', err);
      }
    });
  }
}