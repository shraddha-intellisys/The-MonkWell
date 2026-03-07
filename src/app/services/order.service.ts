import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private storageKey = 'monkwell_orders';

  getOrders(): any[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  placeOrder(order: any) {
    const existingOrders = this.getOrders();
    existingOrders.unshift(order);
    localStorage.setItem(this.storageKey, JSON.stringify(existingOrders));
  }

  clearOrders() {
    localStorage.removeItem(this.storageKey);
  }
}