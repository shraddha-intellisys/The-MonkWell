import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss']
})
export class OrdersPage implements OnInit {
  orders: any[] = [];

  ngOnInit() {
  this.orders = [
    {
      id: 'ORD123',
      orderDate: 'Today',
      status: 'Placed',
      total: 499,
      items: [
        { name: 'Monk Fruit Tea Sweetener', quantity: 1, price: 399 }
      ]
    }
  ];
}

  loadOrders() {
    const savedOrders = localStorage.getItem('orders');
    this.orders = savedOrders ? JSON.parse(savedOrders) : [];
    console.log('Orders Page Loaded:', this.orders);
  }
}