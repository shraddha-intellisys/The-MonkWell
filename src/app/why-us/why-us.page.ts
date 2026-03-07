import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule, IonicModule, HeaderComponent],
  templateUrl: './why-us.page.html',
  styleUrls: ['./why-us.page.scss']
})
export class WhyUsPage {
  reasons = [
    {
      icon: 'leaf-outline',
      title: 'Natural Sweetness',
      description: 'Our products are inspired by monk fruit based sweetness, offering a cleaner and more mindful alternative for modern lifestyles.'
    },
    {
      icon: 'fitness-outline',
      title: 'Wellness Focused',
      description: 'We build products for people who want sweetness to fit into healthier everyday habits without feeling heavy or overly processed.'
    },
    {
      icon: 'cafe-outline',
      title: 'Made for Daily Use',
      description: 'From tea and coffee to lemonade and desserts, our products are crafted to fit naturally into your routine.'
    },
    {
      icon: 'star-outline',
      title: 'Premium Experience',
      description: 'We care about not only what you consume, but also how the brand feels, looks, and supports your overall lifestyle.'
    }
  ];

  values = [
    'Cleaner product philosophy',
    'Modern wellness-first branding',
    'Versatile products for beverages and recipes',
    'Better balance of taste and lifestyle',
    'Designed for conscious consumers',
    'Simple and premium user experience'
  ];
}