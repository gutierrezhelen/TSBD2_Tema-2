import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CourseService {
  private baseUrl = 'http://localhost:8090/api/course';

  async getAllCourses() {
    const response = await axios.get(`${this.baseUrl}/all`);
    return response.data;
  }

  async getCourseById(id: number) {
    const response = await axios.get(`${this.baseUrl}/search/${id}`);
    return response.data;
  }

  async getCourseByStudentsId(idStudents: number) {
    const response = await axios.get(`${this.baseUrl}/search-by-students/${idStudents}`);
    return response.data;
  }

  async createCourse(course: any) {
    const response = await axios.post(`${this.baseUrl}/create`, course);
    return response.data;
  }

  async updateCourse(id: number, course: any) {
    const response = await axios.put(`${this.baseUrl}/update/${id}`, course);
    return response.data;
  }

  async deleteCourse(id: number) {
    const response = await axios.delete(`${this.baseUrl}/delete/${id}`);
    return response.data;
  }
}