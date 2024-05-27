import { Component, OnInit } from '@angular/core';
import { TweetService } from '../services/tweet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tweets: any[] = [];

  constructor(private tweetService: TweetService) {}

  ngOnInit(): void {
    this.tweetService.getTweets().subscribe(data => {
      this.tweets = data;
    });
  }
}
