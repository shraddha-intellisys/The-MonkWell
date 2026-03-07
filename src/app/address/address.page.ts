import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss']
})
export class AddressPage implements OnInit {
  addresses: any[] = [];

  newAddress = {
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: ''
  };

  ngOnInit() {
    const saved = localStorage.getItem('addresses');

    if (saved) {
      this.addresses = JSON.parse(saved);
    }
  }

  saveAddress() {
    this.addresses.push({ ...this.newAddress });
    localStorage.setItem('addresses', JSON.stringify(this.addresses));

    this.newAddress = {
      name: '',
      phone: '',
      address: '',
      city: '',
      pincode: ''
    };
  }
}