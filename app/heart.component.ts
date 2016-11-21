import { Component, Input } from 'angular2/core';

@Component ({
    selector: 'heart',
    templateUrl: 'app/heart.template.html',
    styles: ['.glyphicon-heart {color: blue; cursor: pointer;}.liked {color: red;}']
})

export class HeartComponent {
    
    @Input() amount;
    @Input() choiceMade;
    onClick(){
        this.choiceMade ? (this.amount--) : (this.amount++);
        this.choiceMade = !this.choiceMade;
    }
}