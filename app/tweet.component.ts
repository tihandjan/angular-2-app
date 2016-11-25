import { Component, Input } from 'angular2/core';
import { IlikeComponent } from './like.component';

@Component ({
    selector: 'tweet',
    template: `
        <li class="media">
            <div class="media-left">
            <a href="#">
                <img class="media-object" [src]="data.imageUrl" alt="...">
            </a>
            </div>
            <div class="media-body">
            <h4 class="media-heading"><like [totalLikes]="data.totalLikes" [ilike]="data.iLike"></like></h4>
            {{data.body}}
            </div>
        </li>
    `,
    directives: [IlikeComponent]
})

export class TweetComponent {
    @Input() data;
}