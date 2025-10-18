import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:8082/api/course'; // Ajustar puerto según tu microservicio

  getAllCourses() {
    return axios.get(this.apiUrl);
  }

  getCourseById(id: number) {
    return axios.get(`${this.apiUrl}/${id}`);
  }

  getStudentsByCourse(courseId: number) {
    return axios.get(`${this.apiUrl}/${courseId}/students`);
  }
}
