package com.microservice.course.persistence;

import com.microservice.course.entities.Course;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

@Repository
public interface ICourseRepository extends CrudRepository<Course, Long> {
}
