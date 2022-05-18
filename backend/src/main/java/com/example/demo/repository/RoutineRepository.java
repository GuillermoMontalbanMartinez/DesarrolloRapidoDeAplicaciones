package com.example.demo.repository;


import com.example.demo.entity.Routine;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*", allowedHeaders = "*")
public interface RoutineRepository extends CrudRepository<Routine, Long> {
}
    
