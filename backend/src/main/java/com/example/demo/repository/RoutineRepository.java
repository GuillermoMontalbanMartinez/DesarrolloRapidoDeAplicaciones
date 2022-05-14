package com.example.demo.repository;

import java.util.List;

import com.example.demo.entity.Routine;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface RoutineRepository extends CrudRepository<Routine, Long> {
    List<Routine> findByExerciseName(@Param("name") String exerciseName);
}
    
