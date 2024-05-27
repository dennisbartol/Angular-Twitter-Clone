import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})



export class TweetService {
private apiUrl = 'https://api.example.com/tweets';

constructor(private http: HttpClient) {}
