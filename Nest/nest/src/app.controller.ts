import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  getHome() {
    return { titulo: 'Bienvenid@s Al Microservicio De Nest' };
  }

  @Get('students')
  @Render('students')
  getStudents() {
    return { titulo: 'Estudiantes' };
  }

  @Get('courses')
  @Render('courses')
  getCourses() {
    return { titulo: 'Cursos' };
  }
}
