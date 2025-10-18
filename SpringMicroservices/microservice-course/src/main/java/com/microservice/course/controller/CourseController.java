package com.microservice.course.controller;

import com.microservice.course.entities.Course;
import com.microservice.course.http.response.StudentByCourseResponse;
import com.microservice.course.service.ICourseService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") // 🔹 Permite todos los orígenes temporalmente
@RestController
@RequestMapping("/api/course")
public class CourseController {

    @Autowired
    private ICourseService courseService;

    // ✅ CREAR (INSERT)
    @PostMapping
    public ResponseEntity<Course> create(@Valid @RequestBody Course course) {
        Course saved = courseService.save(course);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    // ✅ LEER TODOS (READ ALL)
    @GetMapping
    public ResponseEntity<List<Course>> findAll() {
        return ResponseEntity.ok(courseService.findAll());
    }

    // ✅ LEER POR ID (READ BY ID)
    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        Course course = courseService.findById(id);
        if (course == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Curso no encontrado");
        }
        return ResponseEntity.ok(course);
    }

    // ✅ LEER ESTUDIANTES DE UN CURSO (READ STUDENTS BY COURSE)
    @GetMapping("/{courseId}/students")
    public ResponseEntity<?> findStudentsByCourseId(@PathVariable Long courseId) {
        StudentByCourseResponse response = courseService.findStudentsByCourseId(courseId);
        if (response == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("No se encontraron estudiantes para este curso");
        }
        return ResponseEntity.ok(response);
    }

    // ✅ ACTUALIZAR (UPDATE)
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Course updatedCourse) {
        Course existing = courseService.findById(id);
        if (existing == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Curso no encontrado");
        }

        existing.setName(updatedCourse.getName());
        existing.setTeacher(updatedCourse.getTeacher());

        courseService.save(existing);
        return ResponseEntity.ok(existing);
    }

    // ✅ ELIMINAR (DELETE)
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Course existing = courseService.findById(id);
        if (existing == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Curso no encontrado");
        }

        courseService.deleteById(id);
        return ResponseEntity.ok("Curso eliminado correctamente");
    }
}
