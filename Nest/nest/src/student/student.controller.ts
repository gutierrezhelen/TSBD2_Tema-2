import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('api/student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('all')
  async getAll() {
    return this.studentService.getAllStudents();
  }

  @Get('search/:id')
  async getById(@Param('id') id: number) {
    return this.studentService.getStudentById(id);
  }

  @Get('search-by-course/:idCourse')
  async getByCourseId(@Param('idCourse') idCourse: number) {
    return this.studentService.getStudentsByCourseId(idCourse);
  }

  @Post('create')
  async create(@Body() student: any) {
    return this.studentService.createStudent(student);
  }

  @Put('update/:id')
  async update(@Param('id') id: number, @Body() student: any) {
    return this.studentService.updateStudent(id, student);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number) {
    return this.studentService.deleteStudent(id);
  }
}