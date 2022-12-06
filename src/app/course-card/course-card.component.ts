import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor(){}

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed(){

    console.log("Hi");

    this.courseSelected.emit(this.course);

  }

  cardClasses(){
    if(this.course.category == 'BEGINNER'){
      return 'beginner';
    }
  }

  cardStyles(){
    return {'background-image': 'url(' + this.course.iconUrl + ')'};
  }
}
