import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import  {HeartComponent} from './heart.component';
import {VoteComponent} from './vote.component';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><courses></courses><authors></authors><heart [amount]="post.amount" [choiceMade]="post.choiceMade"></heart><vote [votes]="vote.votes" [ivote]="vote.ivote" ></vote>',
    directives: [CoursesComponent, AuthorsComponent, HeartComponent, VoteComponent]
})
export class AppComponent {
	post = {
        choiceMade: true,
        amount: 10
    }

    vote = {
        votes: 0,
        ivote: 1
    }
}

