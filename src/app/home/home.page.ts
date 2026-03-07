import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { CartService } from '../services/cart.service';
import { ChatbotComponent } from '../components/chatbot/chatbot.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, HeaderComponent, ChatbotComponent],
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

  shopByNeeds = [
    {
      icon: 'cafe-outline',
      title: 'For Tea Lovers',
      description: 'A smooth sweetness for your everyday tea moments.'
    },
    {
      icon: 'moon-outline',
      title: 'For Coffee Lovers',
      description: 'Enjoy rich coffee taste without regular sugar guilt.'
    },
    {
      icon: 'barbell-outline',
      title: 'For Fitness Goals',
      description: 'A better fit for active and wellness-focused lifestyles.'
    },
    {
      icon: 'ice-cream-outline',
      title: 'For Desserts',
      description: 'Great for pancakes, sweet dishes, and creative recipes.'
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
      description: 'Enjoy coffee with rich taste and no sugar guilt and best for weight management.',
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

  useCases = [
    {
      icon: 'cafe-outline',
      title: 'Tea & Coffee',
      description: 'Stir into your favorite hot drinks for smooth everyday sweetness.'
    },
    {
      icon: 'restaurant-outline',
      title: 'Desserts',
      description: 'Use in pancakes, sweets, bowls, and healthy homemade treats.'
    },
    {
      icon: 'water-outline',
      title: 'Cold Drinks',
      description: 'Perfect for lemonade, mocktails, and refreshing chilled beverages.'
    },
    {
      icon: 'fitness-outline',
      title: 'Daily Wellness',
      description: 'A great option for mindful food choices and modern routines.'
    }
  ];

  testimonials = [
    {
      name: 'Priya S.',
      rating: '★★★★★',
      text: 'I loved how clean and light it tastes in my morning tea.'
    },
    {
      name: 'Rahul M.',
      rating: '★★★★★',
      text: 'Much better than regular sweeteners and the packaging feels premium.'
    },
    {
      name: 'Ananya K.',
      rating: '★★★★★',
      text: 'The lemonade mix is refreshing and perfect for summer.'
    }
  ];

  faqs = [
    {
      question: 'What is monk fruit sweetener?',
      answer: 'It is a natural sweetener alternative designed for cleaner everyday sweetness.'
    },
    {
      question: 'Can I use it in hot drinks?',
      answer: 'Yes, it works well in tea, coffee, and other warm beverages.'
    },
    {
      question: 'Does it have a bitter aftertaste?',
      answer: 'Our products are designed to give a smooth and pleasant taste experience.'
    },
    {
      question: 'Is it suitable for daily use?',
      answer: 'Yes, it is made for convenient daily use across drinks and food.'
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