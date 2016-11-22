import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component ({
    selector: 'vote',
    templateUrl: 'app/vote.template.html',
    styles: [`
        .vote-div {width: 20px;}
        .glyphicon {cursor: pointer;}
        .up {color: red;}
    `]
})

export class VoteComponent {
    @Input() votes = 0;
    @Input() ivote = 1;
    @Output() vote = new EventEmitter;

    onClickUp(){
        if (this.ivote >= 0 && this.ivote < 2) {
            this.votes ++;
            this.ivote ++;
            this.vote.emit({ivote: this.ivote})
        }
    }
    onClickDown(){
        if (this.ivote > 0 && this.ivote <= 2) {
            this.votes --;
            this.ivote --;
            this.vote.emit({ivote: this.ivote})
        }
    }
}