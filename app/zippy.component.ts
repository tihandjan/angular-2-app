import { Component, Input } from 'angular2/core';

@Component({
    selector: 'zippy',
    template: `
        <div class="myclass">
            {{title}}<i class="glyphicon" 
            [ngClass]="{
                'glyphicon-chevron-up':!ifExpended,
                'glyphicon-chevron-down':ifExpended
            }" (click)="onToggle()"></i>
        </div>
        <div class="content" *ngIf="ifExpended">
            <ng-content></ng-content>
        </div>
    `,
    styles: [`
        .myclass {
            width: 200px;
            background: blue;
            position: relative;
            color: #FFF;
            padding: 10px;
        }
        .content {
            width: 200px;
            padding: 10px;
            background: yellow;
            color: #FFF;
        }
        .glyphicon {position: absolute;right:8px;top:12px;color:#FFF;cursor:pointer;}
    `]
})

export class ZippyComponent {
    @Input() title: string;
    ifExpended = false;
    onToggle(){
        this.ifExpended = !this.ifExpended
    }
}