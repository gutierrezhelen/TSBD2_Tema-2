package com.microservice.student.service;

import com.microservice.student.entities.Student;
import java.util.List;

public interface IStudentService {

    List<Student> findAll();

    Student findById(Long id);

    void save(Student student);

    void deleteById(Long id); // 🔹 Nuevo método

    List<Student> findByIdCourse(Long idCourse);
}
