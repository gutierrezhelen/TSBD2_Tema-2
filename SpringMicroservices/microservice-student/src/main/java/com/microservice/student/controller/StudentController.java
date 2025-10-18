package com.microservice.student.controller;

import com.microservice.student.entities.Student;
import com.microservice.student.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") // 🔹 Permite todos los orígenes temporalmente
@RestController
@RequestMapping("/api/student")
public class StudentController {

    @Autowired
    private IStudentService studentService;

    // ✅ CREAR (INSERT)
    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public void saveStudent(@RequestBody Student student) {
        studentService.save(student);
    }

    // ✅ LEER TODOS (READ ALL)
    @GetMapping("/all")
    public ResponseEntity<List<Student>> findAllStudent() {
        return ResponseEntity.ok(studentService.findAll());
    }

    // ✅ LEER POR ID (READ BY ID)
    @GetMapping("/search/{id}")
    public ResponseEntity<Student> findById(@PathVariable Long id) {
        Student student = studentService.findById(id);
        return ResponseEntity.ok(student);
    }

    // ✅ LEER POR ID DE CURSO
    @GetMapping("/search-by-course/{idCourse}")
    public ResponseEntity<List<Student>> findByIdCourse(@PathVariable Long idCourse) {
        return ResponseEntity.ok(studentService.findByIdCourse(idCourse));
    }

    // ✅ ACTUALIZAR (UPDATE)
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateStudent(@PathVariable Long id, @RequestBody Student updatedStudent) {
        Student existingStudent = studentService.findById(id);
        if (existingStudent == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Estudiante no encontrado");
        }

        existingStudent.setName(updatedStudent.getName());
        existingStudent.setLastName(updatedStudent.getLastName());
        existingStudent.setEmail(updatedStudent.getEmail());
        existingStudent.setCourseId(updatedStudent.getCourseId());

        studentService.save(existingStudent);
        return ResponseEntity.ok("Estudiante actualizado correctamente");
    }

    // ✅ ELIMINAR (DELETE)
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteStudent(@PathVariable Long id) {
        Student existingStudent = studentService.findById(id);
        if (existingStudent == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Estudiante no encontrado");
        }

        studentService.deleteById(id);
        return ResponseEntity.ok("Estudiante eliminado correctamente");
    }
}
