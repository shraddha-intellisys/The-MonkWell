import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
  isOpen = false;
  userMessage = '';

  messages: ChatMessage[] = [
    {
      text: 'Hi 👋 Welcome to The MonkWell. How can I help you today?',
      sender: 'bot'
    }
  ];

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    const input = this.userMessage.trim();
    if (!input) return;

    this.messages.push({
      text: input,
      sender: 'user'
    });

    const reply = this.getBotReply(input);

    setTimeout(() => {
      this.messages.push({
        text: reply,
        sender: 'bot'
      });
    }, 500);

    this.userMessage = '';
  }

  getBotReply(message: string): string {
  const text = message.toLowerCase();

  if (text.includes('order now')) {
    return 'You can place your order by visiting our Products page and clicking Add to Cart on your favorite MonkWell product.';
  }

  if (text.includes('track order') || text.includes('track')) {
    return 'Order tracking will be available from your profile page once the orders module is connected. For now, you can contact support for updates.';
  }

  if (text.includes('help')) {
    return 'I can help you with ordering, tracking orders, product suggestions, contact support, delivery questions, and FAQs.';
  }

  if (text.includes('faq')) {
    return 'Frequently asked questions include: What is monk fruit? Which product is best for tea or coffee? How can I contact support? How do I track my order?';
  }

  if (text.includes('tea')) {
    return 'Our Monk Fruit Tea Sweetener is a great choice for tea lovers.';
  }

  if (text.includes('coffee')) {
    return 'Our Monk Fruit Coffee Sweetener is specially made for coffee.';
  }

  if (text.includes('zero calorie') || text.includes('calorie')) {
    return 'Yes, our monk fruit sweetener options are designed as zero-calorie alternatives.';
  }

  if (text.includes('support') || text.includes('contact')) {
    return 'You can reach us at support@monkwell.com, call +91 7066952032, or connect on WhatsApp.';
  }

  if (text.includes('shipping') || text.includes('delivery')) {
    return 'Shipping details can be shared through support. Backend order tracking can be added later.';
  }

  if (text.includes('order')) {
    return 'You can place an order from the Products page, and order details can be shown in your profile once the orders module is connected.';
  }

  if (text.includes('hello') || text.includes('hi')) {
    return 'Hello 😊 How can I help you with MonkWell products today?';
  }

  if (text.includes('monk fruit')) {
    return 'Monk fruit is a natural sweetener alternative used for a cleaner and lighter sweetness experience.';
  }

  return 'I can help with Order Now, Track Order, Help, FAQ, tea, coffee, products, contact, support, and delivery queries.';
}
whatsappNumber = '917066952032';

get whatsappLink(): string {
  const message = encodeURIComponent('Hi The MonkWell, I want to know more about your products.');
  return `https://wa.me/${this.whatsappNumber}?text=${message}`;
}

sendQuickMessage(text: string) {
  this.userMessage = text;
  this.sendMessage();
}}