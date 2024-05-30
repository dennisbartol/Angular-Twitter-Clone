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

// Injects authservice and router service 
constructor(private authService: AuthService, private router: Router) { }

// Switch between login and signup mode 
switchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }


 onSubmit(): void {
    if (this.isLoginMode) {
      this.authService.login(this.email, this.password).subscribe(response => {
        this.router.navigate(['/profile']);
      });
      } else {
      this.authService.signup(this.email, this.password).subscribe(response => {
        this.router.navigate(['/profile']);
      });
    }
  }
 }
