import {Component} from 'angular2/core';
import {CourseService} from './courses.service';


@Component ({
	selector: 'courses',
	template: '<h2>Hi I am courses</h2>{{ title }}<ul><li *ngFor="#course of courses">{{course}}</li></ul>',
	providers: [CourseService]
})

export class CoursesComponent {
	title = "Hi I am a title";
	courses;
	constructor(courseService: CourseService){
		this.courses = courseService.getCourses();
	}
 }
