// A service to handle authentication logic - auth.service.ts

import { Injectable } from '@angular/core'; // Import essential Angular features, and also making this service injectable 
import { HttpClient } from '@angular/common/http';  // Provide http services & making http requests
import { Observable } from 'rxjs'; // Support for reactive programming 
import { tap } from 'rxjs/operators'; // Perform side effects + Updating the user property

@Injectable({
  providedIn: 'root'
}) // This code block means the authentication service is to be shared at the root level

export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth'; // The base URL for the authentication API
  private user: any; // This property stores the data of the user 

  constructor(private http: HttpClient) { }
  // This constructor injects http requests

// The signup method 
  signup(email: string, password: string): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/signup`, { email, password })
    .pipe(tap(response => {
      this.user = response.user;
    }));
}

  
