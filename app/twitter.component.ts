import { Component, Input } from 'angular2/core';
import { TwiterService } from './tweeter.service';

@Component ({
    selector: 'tweeter',
    template: `
        <ul class="media-list">
            <li class="media" *ngFor="#twitt of twitts">
                <div class="media-left">
                <a href="#">
                    <img class="media-object" src="..." alt="...">
                </a>
                </div>
                <div class="media-body">
                <h4 class="media-heading">Media heading</h4>
                {{twitt}}
                </div>
            </li>
        </ul>
    `,
    providers: [TwiterService]

})

export class TwitterComponent {
    twitts;
    constructor(twiterService: TwiterService) {
        this.twitts = twiterService.getTweets();
    }
}