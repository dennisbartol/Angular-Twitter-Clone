import { Component } from '@angular/core';
import { TweetService } from '../services/tweet.service';

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.css']
})

export class NewTweetComponent {
  tweetContent: string = '';

  constructor(private tweetService: TweetService) {}

  postTweet(): void {
    this.tweetService.postTweet({ content: this.tweetContent }).subscribe(() => {
      this.tweetContent = '';
    });
  }
}
  
