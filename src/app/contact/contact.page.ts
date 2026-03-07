import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, HeaderComponent],
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss']
})
export class ContactPage {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  showPopup = false;

  contactCards = [
    {
      icon: 'mail-outline',
      title: 'Email Us',
      text: 'support@monkwell.com'
    },
    {
      icon: 'call-outline',
      title: 'Call Us',
      text: '+91 7066952032'
    },
    {
      icon: 'location-outline',
      title: 'Visit Us',
      text: 'Nagpur, Maharashtra, India'
    }
  ];

  faqs = [
    {
      question: 'Do you provide product support?',
      answer: 'Yes, we help customers with product-related questions, usage guidance, and general support.'
    },
    {
      question: 'Can I contact you for bulk orders?',
      answer: 'Yes, you can reach out through email or the contact form for partnerships and bulk inquiries.'
    },
    {
      question: 'How soon can I expect a response?',
      answer: 'We aim to respond within 24 to 48 business hours.'
    }
  ];

  submitForm() {
    console.log('Contact form submitted:', this.formData);

    this.showPopup = true;

    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    setTimeout(() => {
      this.showPopup = false;
    }, 1500);
  }
}