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

// Signup method 
  signup(email: string, password: string): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/signup`, { email, password })
    .pipe(tap(response => { // Pipe is imported from the RxJS library
      this.user = response.user;
    })); // The tap operator is used to update the user property with the user data from the response, when the request is successful
}


  login(email: string, password: string): Observable<any> {
    // This method sends a POST request to the login endpoint of the API, with the provided credentials
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
    // The tap operator updates the user property with the user data from the response
      .pipe(tap(response => { 
      this.user = response.user; 
    }));     
  }

logout(): void { 
  this.user = null; 
} // This method clears the user to null, logging the user out


getUser(): any { 
  return.this.user; 
} // This method returns the current user's data - Which is stored in the user property
  
  
