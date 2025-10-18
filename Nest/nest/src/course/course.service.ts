import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CourseService {
  private baseUrl = 'http://localhost:9090/api/course';

  // Obtener todos los cursos
  async getAllCourses() {
    try {
      const response = await axios.get(`${this.baseUrl}/all`, {
        headers: { Accept: 'application/json' },
      });
      return response.data;
    } catch (error: any) {
      console.error('Error al obtener cursos:', error.response?.data || error.message);
      throw error;
    }
  }

  // Obtener curso por ID
  async getCourseById(id: number) {
    try {
      const response = await axios.get(`${this.baseUrl}/${id}`, {
        headers: { Accept: 'application/json' },
      });
      return response.data;
    } catch (error: any) {
      console.error('Error al obtener curso:', error.response?.data || error.message);
      throw error;
    }
  }

  // Crear nuevo curso
  async createCourse(course: { name: string; teacher?: string }) {
    try {
      const response = await axios.post(`${this.baseUrl}`, course, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data;
    } catch (error: any) {
      console.error('Error al crear curso:', error.response?.data || error.message);
      throw error;
    }
  }

  // Actualizar curso
  async updateCourse(id: number, course: { name: string; teacher?: string }) {
    try {
      const response = await axios.put(`${this.baseUrl}/${id}`, course, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data;
    } catch (error: any) {
      console.error('Error al actualizar curso:', error.response?.data || error.message);
      throw error;
    }
  }

  // Eliminar curso
  async deleteCourse(id: number) {
    try {
      const response = await axios.delete(`${this.baseUrl}/${id}`);
      return response.data;
    } catch (error: any) {
      console.error('Error al eliminar curso:', error.response?.data || error.message);
      throw error;
    }
  }

  // Obtener estudiantes de un curso
  async getStudentsByCourseId(courseId: number) {
    try {
      const response = await axios.get(`${this.baseUrl}/${courseId}/students`);
      return response.data;
    } catch (error: any) {
      console.error('Error al obtener estudiantes:', error.response?.data || error.message);
      throw error;
    }
  }
}
