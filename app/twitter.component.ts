import { Component, Input } from 'angular2/core';
import { TwiterService } from './tweeter.service';
import { TweetComponent } from './tweet.component';

@Component ({
    selector: 'tweeter',
    template: `
        <ul class="media-list" *ngFor="#data of twitts">
            <tweet [data]="data"></tweet>
        </ul>
    `,
    directives: [TweetComponent],
    providers: [TwiterService]

})

export class TwitterComponent {
    twitts: any[];
    constructor(twiterService: TwiterService) {
        this.twitts = twiterService.getTweets();
    }
}