import {Component} from 'angular2/core';
import {CourseService} from './courses.service';
import {AutoGrowDirective} from './auto-grow.directive';
import {StarChangeComponent} from './star.component';



@Component ({
	selector: 'courses',
	template: `
	<h2>Hi I am courses</h2>{{ title }}
	<ul><li *ngFor="#course of courses">{{course}}</li></ul>
	<input [(ngModel)]="title" autoGrow />Preview: {{title}}
	<star></star>
	`,
	providers: [CourseService],
	directives: [AutoGrowDirective, StarChangeComponent]
})

export class CoursesComponent {
	title = "Hi I am a title";
	courses;
	constructor(courseService: CourseService){
		this.courses = courseService.getCourses();
	}
 }
