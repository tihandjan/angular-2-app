import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import  {HeartComponent} from './heart.component';
import {VoteComponent} from './vote.component';
import {TwitterComponent} from './twitter.component';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><courses></courses><authors></authors><heart [amount]="post.amount" [choiceMade]="post.choiceMade"></heart><vote [votes]="vote.votes" [ivote]="vote.ivote" (vote)="onVote($event)"></vote><tweeter></tweeter>',
    directives: [CoursesComponent, AuthorsComponent, HeartComponent, VoteComponent, TwitterComponent]
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

    onVote($event){
        console.log($event.ivote);
    }
}

