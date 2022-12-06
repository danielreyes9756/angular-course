import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;
  
  title = 'angular courses';

  startDate = new Date(2000, 0, 1);

  price = 9.99;

  onCourseSelected(course: Course) {
    console.log("Hola", course)
  }

}
