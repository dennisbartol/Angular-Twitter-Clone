// A service to handle authentication logic - auth.service.ts

import { Injectable } from '@angular/core'; // Import essential Angular features, and also making this service injectable 
import { HttpClient } from '@angular/common/http';  // Provide http services & making http requests
import { Observable } from 'rxjs'; // Support for reactive programming 
import { tap } from 'rxjs/operators'; // Perform side effects, updating the user property

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';
  private user: any;
