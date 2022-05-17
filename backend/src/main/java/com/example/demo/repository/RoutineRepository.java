package com.example.demo.repository;

import java.util.List;

import com.example.demo.entity.Routine;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*", allowedHeaders = "*")
public interface RoutineRepository extends CrudRepository<Routine, Long> {
}
    
