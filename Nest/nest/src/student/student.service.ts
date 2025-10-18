import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class StudentService {
  private baseUrl = 'http://localhost:8090/api/student';

  async getAllStudents() {
  const response = await axios.get(`${this.baseUrl}/all`);
  return response.data;
}

async getStudentById(id: number) {
  const response = await axios.get(`${this.baseUrl}/search/${id}`);
  return response.data;
}

async getStudentsByCourseId(idCourse: number) {
  const response = await axios.get(`${this.baseUrl}/search-by-course/${idCourse}`);
  return response.data;
}

async createStudent(student: any) {
  const response = await axios.post(`${this.baseUrl}/create`, student);
  return response.data;
}

async updateStudent(id: number, student: any) {
  const response = await axios.put(`${this.baseUrl}/update/${id}`, student);
  return response.data;
}

async deleteStudent(id: number) {
  const response = await axios.delete(`${this.baseUrl}/delete/${id}`);
  return response.data;
}
}