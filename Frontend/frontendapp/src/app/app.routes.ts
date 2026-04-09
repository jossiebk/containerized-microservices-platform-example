import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Users } from './pages/users/users';
import { Products } from './pages/products/products';
import { Shipping } from './pages/shipping/shipping';
import { Inventory } from './pages/inventory/inventory';
import { Cart } from './pages/cart/cart';
import { Orders } from './pages/orders/orders';
import { Payments } from './pages/payments/payments';
import { Reviews } from './pages/reviews/reviews';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'users', component: Users },
  { path: 'products', component: Products },
  { path: 'cart', component: Cart },
  { path: 'orders', component: Orders },
  { path: 'payments', component: Payments },
  { path: 'shipping', component: Shipping },
  { path: 'inventory', component: Inventory },
  { path: 'reviews', component: Reviews }
];