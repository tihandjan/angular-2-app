import {Component} from 'angular2/core';

@Component({
    selector: 'star',
    template: 
        `
            <i [class]="isTrue ? 'glyphicon glyphicon-star' : 'glyphicon glyphicon-star-empty'" (click)="onClick()"></i>
        `
})

export class StarChangeComponent {
    isTrue = false;
    onClick(){
        this.isTrue ? this.isTrue = false : this.isTrue = true;
    }
}