import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('api/course') // 👈 Alineado con Spring Boot
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  // ✅ Obtener todos los cursos
  @Get('all')
  getAll() {
    return this.courseService.getAllCourses();
  }

  // ✅ Buscar curso por ID
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.courseService.getCourseById(id);
  }

  // ✅ Crear nuevo curso
  @Post()
  create(@Body() course: { name: string; teacher?: string }) {
    return this.courseService.createCourse(course);
  }

  // ✅ Actualizar curso existente
  @Put(':id')
  update(@Param('id') id: number, @Body() course: { name: string; teacher?: string }) {
    return this.courseService.updateCourse(id, course);
  }

  // ✅ Eliminar curso
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.courseService.deleteCourse(id);
  }

  // ✅ Obtener estudiantes por curso
  @Get(':courseId/students')
  getStudentsByCourseId(@Param('courseId') courseId: number) {
    return this.courseService.getStudentsByCourseId(courseId);
  }
}
