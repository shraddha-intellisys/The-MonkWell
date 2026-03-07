import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  user = {
    name: '',
    email: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  login() {
    if (!this.user.name || !this.user.email) {
      alert('Please fill all fields');
      return;
    }

    this.authService.login(this.user);
    this.router.navigate(['/']);
  }
}