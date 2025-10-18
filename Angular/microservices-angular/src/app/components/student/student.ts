import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.html',
  styleUrls: ['./student.css']
})
export class StudentComponent implements OnInit {
  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getAllStudents()
      .then(res => this.students = res.data)
      .catch(err => console.error('Error al cargar estudiantes', err));
  }
}
