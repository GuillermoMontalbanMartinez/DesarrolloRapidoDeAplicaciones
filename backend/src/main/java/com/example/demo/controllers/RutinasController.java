package com.example.demo.controllers;

import java.util.List;

import com.example.demo.entity.Routine;
import com.example.demo.repository.RoutineRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/routines")
public class RutinasController {
    @Autowired
    private RoutineRepository repository;

    @PostMapping(path = "")
    public void postRutines(@RequestBody Routine routine) {
            this.repository.save(routine);
    }

    @GetMapping(path = "")
    public List<Routine> getRutines() {
        return  (List<Routine>) this.repository.findAll();
    }

    @PutMapping(path = "")
    public void putRutines(@RequestBody Routine routine) {
        this.repository.save(routine);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteRutines(@PathVariable("id") long id) {
        this.repository.deleteById(id);
    }

}
