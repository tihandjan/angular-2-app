import {Component} from 'angular2/core';
import { ZippyComponent } from './zippy.component';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><zippy title="Who ae you beach?">I am not you</zippy><zippy title="What you can do for me?">Everything what you want to have</zippy>',
    directives: [ZippyComponent]
})
export class AppComponent { }