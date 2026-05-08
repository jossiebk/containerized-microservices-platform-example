import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient) {}

  usersUrl = 'http://localhost:5001/api/users';
  productsUrl = 'http://localhost:5002/api/products';
  shippingUrl = 'http://localhost:5003/api/shipping';
  inventoryUrl = 'http://localhost:5004/api/inventory';
  cartUrl = 'http://localhost:5005/api/cart';
  ordersUrl = 'http://localhost:5006/api/orders';
  paymentsUrl = 'http://localhost:5007/api/payments';
  reviewsUrl = 'http://localhost:5009/api/reviews';

  // usersUrl = 'http://users-api:5001/api/users';
  // productsUrl = 'http://products-api:5002/api/products';
  // shippingUrl = 'http://shipping-api:5003/api/shipping';
  // inventoryUrl = 'http://inventory-api:5004/api/inventory';
  // cartUrl = 'http://cart-api:5005/api/cart';
  // ordersUrl = 'http://orders-api:5006/api/orders';
  // paymentsUrl = 'http://payments-api:5007/api/payments';
  // reviewsUrl = 'http://reviews-api:5009/api/reviews';

  get(url: string) {
    return this.http.get(url);
  }

  post(url: string, data: any) {
    return this.http.post(url, data);
  }
}