import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule, HeaderComponent],
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage {
  products = [
    {
      name: 'Monk Fruit Tea Sweetener',
      description: 'Perfect natural sweetener for tea.',
      price: 249,
      image: 'assets/images/tea.png'
    },
    {
      name: 'Monk Fruit Coffee Sweetener',
      description: 'Healthy sweetness for coffee.',
      price: 279,
      image: 'assets/images/coffee.png'
    },
    {
      name: 'Monk Fruit Lemonade Mix',
      description: 'Refreshing monk fruit lemonade.',
      price: 299,
      image: 'assets/images/lemonade.png'
    },
    {
      name: 'Monk Fruit Energy Drink Mix',
      description: 'Natural energy drink mix.',
      price: 349,
      image: 'assets/images/drink.png'
    },
    {
      name: 'Monk Fruit Flavored Syrup',
      description: 'Perfect for desserts and beverages.',
      price: 319,
      image: 'assets/images/syrup.png'
    }
  ];

  activePopupProduct: string | null = null;

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);

    this.activePopupProduct = product.name;

    setTimeout(() => {
      if (this.activePopupProduct === product.name) {
        this.activePopupProduct = null;
      }
    }, 1500);
  }
}