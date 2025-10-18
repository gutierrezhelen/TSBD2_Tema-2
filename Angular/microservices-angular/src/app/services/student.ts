import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:8081/api/student';

  getAllStudents() {
    return axios.get(`${this.apiUrl}/all`);
  }

  getStudentById(id: number) {
    return axios.get(`${this.apiUrl}/search/${id}`);
  }

  getStudentsByCourse(courseId: number) {
    return axios.get(`${this.apiUrl}/search-by-course/${courseId}`);
  }
}
