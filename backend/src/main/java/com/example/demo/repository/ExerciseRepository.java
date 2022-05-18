package com.example.demo.repository;

import com.example.demo.entity.Exercise;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RepositoryRestResource
public interface ExerciseRepository extends CrudRepository<Exercise, Long> {
}
    
