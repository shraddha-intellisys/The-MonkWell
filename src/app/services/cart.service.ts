import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  cart$ = this.cartSubject.asObservable();

  constructor() {}

  addToCart(product: Omit<CartItem, 'quantity'>) {
    const existingItem = this.cartItems.find(
      item => item.name === product.name
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }

    this.cartSubject.next([...this.cartItems]);
  }

  getCartItems(): CartItem[] {
    return [...this.cartItems];
  }

  removeFromCart(productName: string) {
    this.cartItems = this.cartItems.filter(item => item.name !== productName);
    this.cartSubject.next([...this.cartItems]);
  }

  increaseQuantity(productName: string) {
    const item = this.cartItems.find(item => item.name === productName);
    if (item) {
      item.quantity += 1;
      this.cartSubject.next([...this.cartItems]);
    }
  }

  decreaseQuantity(productName: string) {
    const item = this.cartItems.find(item => item.name === productName);
    if (item) {
      item.quantity -= 1;
      if (item.quantity <= 0) {
        this.removeFromCart(productName);
      } else {
        this.cartSubject.next([...this.cartItems]);
      }
    }
  }

  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next([]);
  }
}