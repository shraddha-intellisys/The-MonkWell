import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, HeaderComponent],
})
export class HomePage {
  trustBadges = [
    'Zero Calories',
    '100% Natural',
    'No Bitter Aftertaste',
    'Diabetic Friendly',
    '1:1 Sugar Swap'
  ];

  features = [
    {
      icon: 'leaf-outline',
      title: 'Natural Sweetness',
      description: 'Made for clean and guilt-free daily sweetness.'
    },
    {
      icon: 'fitness-outline',
      title: 'Healthy Lifestyle',
      description: 'A better sugar alternative for balanced living.'
    },
    {
      icon: 'cafe-outline',
      title: 'Daily Use',
      description: 'Perfect for tea, coffee, drinks, and desserts.'
    },
    {
      icon: 'heart-outline',
      title: 'Feel Good Choice',
      description: 'Modern sweetness designed for conscious consumers.'
    }
  ];

  products = [
    {
      name: 'Monk Fruit Tea Sweetener',
      description: 'A smooth and natural zero-calorie sweetener crafted for tea lovers.',
      price: 399,
      image: 'assets/images/tea.png',
      badge: 'Best for Tea'
    },
    {
      name: 'Monk Fruit Coffee Sweetener',
      description: 'Enjoy coffee with rich taste and no sugar guilt.',
      price: 399,
      image: 'assets/images/coffee.png',
      badge: 'Coffee Favorite'
    },
    {
      name: 'Monk Fruit Flavored Syrup',
      description: 'Perfect for pancakes, desserts, beverages, and creative recipes.',
      price: 499,
      image: 'assets/images/syrup.png',
      badge: 'Versatile'
    },
    {
      name: 'Monk Fruit Lemonade Mix',
      description: 'A refreshing blend for summer drinks with clean sweetness.',
      price: 349,
      image: 'assets/images/lemonade.png',
      badge: 'Refreshing'
    },
    {
      name: 'Monk Fruit Energy Drink Mix',
      description: 'A bold healthy mix for active days and modern energy needs.',
      price: 449,
      image: 'assets/images/drink.png',
      badge: 'Active Choice'
    }
  ];
}