import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.html',
  styleUrls: ['./course.css']
})
export class CourseComponent implements OnInit {
  courses: any[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getAllCourses()
      .then(res => this.courses = res.data)
      .catch(err => console.error('Error al cargar cursos', err));
  }
}
