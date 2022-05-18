package com.example.demo.controllers;

import java.util.List;

import com.example.demo.entity.Exercise;
import com.example.demo.repository.ExerciseRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/exercises")
public class ExerciseController {
    @Autowired
    private ExerciseRepository repository;
    
    @GetMapping(path = "")
    public List<Exercise> getExercises() {
        return (List<Exercise>) this.repository.findAll();
    }
    
    @PostMapping(path = "")
    public void postExercises(@RequestBody Exercise exercise) {
            this.repository.save(exercise);
    }

    @DeleteMapping(path = "")
    public void deleteExercises(@RequestBody Exercise exercise) {
        this.repository.delete(exercise);
    }
}
