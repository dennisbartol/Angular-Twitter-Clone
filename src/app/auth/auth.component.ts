import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
isLoginMode = true;
email = '';
password = '';

constructor(private authService: AuthService, private router: Router) { }

// Switch between login and signup mode 
switchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }
