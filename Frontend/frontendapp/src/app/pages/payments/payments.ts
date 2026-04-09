import { Component } from '@angular/core';
import { ApiService } from '../../services/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payments.html',
  styleUrl: './payments.css'
})
export class Payments {

  payments: any[] = [];

  userName: string = '';
  amount: number = 0;

  lastResponse: any = null;

  constructor(private api: ApiService) {}

  loadPayments() {
    this.api.get(this.api.paymentsUrl).subscribe({
      next: (data: any) => {
        console.log('GET payments:', data);
        this.payments = data;
      },
      error: (err) => {
        console.error('GET payments error:', err);
      }
    });
  }

  createPayment() {
    const body = {
      userName: this.userName,
      amount: this.amount
    };

    console.log('POST payments:', body);

    this.api.post(this.api.paymentsUrl, body).subscribe({
      next: (response: any) => {
        console.log('POST response:', response);

        this.lastResponse = response;

        this.userName = '';
        this.amount = 0;

        this.loadPayments();
      },
      error: (err) => {
        console.error('POST payments error:', err);
      }
    });
  }
}