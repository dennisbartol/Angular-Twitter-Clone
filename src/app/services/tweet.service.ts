import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class TweetService {
private apiUrl = 'https://api.example.com/tweets';

constructor(private http: HttpClient) {}

getTweets(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}

postTweet(tweet: any): Observable<any> {
  return this.http.post<any>(this.apiUrl, tweet);
}

