import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { CartService, CartItem } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HeaderComponent],
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss']
})
export class CheckoutPage implements OnInit {
  cartItems: CartItem[] = [];
  subtotal = 0;
  deliveryCharge = 50;
  total = 0;

  showSuccessPopup = false;

  checkoutData = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod'
  };

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.subtotal = this.cartService.getTotalPrice();
    this.total = this.subtotal + this.deliveryCharge;
  }

  placeOrder() {
  if (
    !this.checkoutData.fullName ||
    !this.checkoutData.email ||
    !this.checkoutData.phone ||
    !this.checkoutData.address
  ) {
    alert('Please fill all required fields');
    return;
  }

  const existingOrders = localStorage.getItem('orders');
  const orders = existingOrders ? JSON.parse(existingOrders) : [];

  const newOrder = {
    id: 'ORD' + Date.now(),
    items: [...this.cartItems],
    subtotal: this.subtotal,
    deliveryCharge: this.deliveryCharge,
    total: this.total,
    customer: { ...this.checkoutData },
    status: 'Placed',
    orderDate: new Date().toLocaleString()
  };

  orders.unshift(newOrder);
  localStorage.setItem('orders', JSON.stringify(orders));

  console.log('Saved Orders:', JSON.parse(localStorage.getItem('orders') || '[]'));

  this.showSuccessPopup = true;

  setTimeout(() => {
    this.showSuccessPopup = false;
    this.cartService.clearCart();
    this.router.navigate(['/orders']);
  }, 2000);
}
}