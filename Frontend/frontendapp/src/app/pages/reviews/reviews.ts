import { Component } from '@angular/core';
import { ApiService } from '../../services/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css'
})
export class Reviews {

  reviews: any[] = [];

  productName: string = '';
  userName: string = '';
  rating: number = 0;
  comment: string = '';

  lastResponse: any = null;

  constructor(private api: ApiService) {}

  loadReviews() {
    this.api.get(this.api.reviewsUrl).subscribe({
      next: (data: any) => {
        console.log('GET reviews:', data);
        this.reviews = data;
      },
      error: (err) => {
        console.error('GET reviews error:', err);
      }
    });
  }

  createReview() {
    const body = {
      productName: this.productName,
      userName: this.userName,
      rating: this.rating,
      comment: this.comment
    };

    console.log('POST review:', body);

    this.api.post(this.api.reviewsUrl, body).subscribe({
      next: (response: any) => {
        console.log('POST response:', response);

        this.lastResponse = response;

        this.productName = '';
        this.userName = '';
        this.rating = 0;
        this.comment = '';

        this.loadReviews();
      },
      error: (err) => {
        console.error('POST review error:', err);
      }
    });
  }
}