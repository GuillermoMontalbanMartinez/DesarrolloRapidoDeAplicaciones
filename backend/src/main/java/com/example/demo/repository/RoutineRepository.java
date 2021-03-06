package com.example.demo.repository;

import com.example.demo.entity.Routine;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RepositoryRestResource
public interface RoutineRepository extends CrudRepository<Routine, Long> {
    public void deleteById(@PathVariable long id);
}

    
