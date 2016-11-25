import { Component, Input } from 'angular2/core';

@Component ({
    selector: 'like',
    template: '<i class="glyphicon glyphicon-heart" [class.ilike]="ilike" (click)="onClick()"></i><span>{{totalLikes}}</span>',
    styles: ['.ilike {color: red;}']
})

export class IlikeComponent {
    @Input() ilike;
    @Input() totalLikes;

    onClick(){
        this.ilike = !this.ilike
        this.ilike ? (this.totalLikes++) : (this.totalLikes--)
    }
}